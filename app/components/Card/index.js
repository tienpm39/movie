import React from 'react'
import styles from './styles'
import { View, TouchableOpacity } from 'react-native'
import { Image } from '@components'

export default function Card(props) {

    const { onPress, image, style, styleContent, children } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style, styles.contain]}
        >
            <Image source={image} style={styles.imageBanner} />
            <View style={styleContent}>{children}</View>
        </TouchableOpacity>
    );
}