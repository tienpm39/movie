import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Image } from '@components'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { useApi } from '../../api/apiGateway'

const api_key = 'f539ec313b2f24fd507015b69fbe59bd';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export default function Detail({ route, navigation }) {

    const { id, title } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApi = async () => {
        return await fetch(BASE_URL + `${id}` + '?api_key=' + `${api_key}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getApi()
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/original' + data.poster_path }}
                    style={styles.imageBanner}
                    resizeMode={''}
                />
                <View>
                    <Text style={styles.movieName}>{title}</Text>
                    <Text style={styles.movieName}>Overview</Text>
                    <Text style={styles.contentText}>{data.overview}</Text>
                </View>
                
            </ScrollView>
            <TouchableOpacity style={styles.playButton}>
                <Text style={styles.watchNow}>Watch Now</Text>
            </TouchableOpacity>
        </View>
    );
}