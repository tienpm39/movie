import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, ScrollView, RefreshControl, Modal } from 'react-native'
import { SafeAreaView } from '@config'
import { Card, Button } from '@components'
import styles from './styles'
import { fetchPopularMovie } from '../../api/getPopularApi';
import { fetchTrendingMovie } from '../../api/getTrendingApi';
import NetInfo from "@react-native-community/netinfo";

const NoInternetModal = ({ show, onRetry, isRetrying }) => (
    <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Connection Error</Text>
            <Text style={styles.modalText}>
                Oops! Looks like your device is not connected to the Internet.
            </Text>
            <Button onPress={onRetry} disabled={isRetrying}>
                Try Again
            </Button>
        </View>
    </Modal>
);

export default function Home({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [trending, setTrending] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });

        fetchPopularMovie()
            .then(data => {
                setData(data),
                    setLoading(false);
                isOffline && setOfflineStatus(false);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        fetchTrendingMovie()
            .then(json => {
                setTrending(json),
                    setLoading(false);
                isOffline && setOfflineStatus(false);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        return () => removeNetInfoSubscription();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchPopularMovie();
        fetchTrendingMovie();
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isOffline ?
                <NoInternetModal
                    show={isOffline}
                    onRetry={onRefresh}
                    isRetrying={isLoading}
                /> : (

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                color="#FFF"
                                tintColor="orange"
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View>
                            <Text style={styles.heading}>What's Popular</Text>
                        </View>
                        <View >
                            {isLoading ? <ActivityIndicator /> : (

                                <FlatList
                                    contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={data.results}
                                    keyExtractor={({ id }) => id}
                                    renderItem={({ item, index }) => (
                                        <Card
                                            style={[styles.movieItem, { marginLeft: 15 }]}
                                            onPress={() => navigation.navigate('Detail', {
                                                id: item.id,
                                                title: item.title,
                                            })}
                                            image={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}
                                        >
                                            <Text style={styles.movieName}>{item.title}</Text>
                                            <Text style={styles.subName}>{item.release_date}</Text>
                                        </Card>
                                    )}
                                />
                            )}
                        </View>
                        <View>
                            <Text style={styles.heading}>Trending Today</Text>
                        </View>
                        <View >
                            {isLoading ?
                                <View style={styles.loading}>
                                    <ActivityIndicator size='large' />
                                </View> : (
                                    <FlatList
                                        contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        data={trending.results}
                                        keyExtractor={({ id }) => id}
                                        renderItem={({ item, index }) => (
                                            <Card
                                                style={[styles.movieItem, { marginLeft: 15 }]}
                                                onPress={() => navigation.navigate('Detail', {
                                                    id: item.id,
                                                    title: item.title,
                                                })}
                                                image={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}
                                            >
                                                <Text style={styles.movieName}>{item.title}</Text>
                                                <Text style={styles.subName}>{item.release_date}</Text>
                                            </Card>
                                        )}
                                    />
                                )}
                        </View>
                    </ScrollView>
                )}
        </SafeAreaView>
    );
}
