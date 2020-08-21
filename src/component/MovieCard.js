import React from 'react'
import { View,Text,Animated, Image } from 'react-native'
import styles from '../styles'

const MovieCard = props => {
    const prop = props.cardItem.item
    return(
        <View style={styles.movieCardStyle.container}>
            <Animated.View
                style={{
                    transform: [{ translateY: props.pTranslateY }], 
                    alignSelf:"center", 
                    zIndex:3, 
                    position:"absolute",
                    marginVertical:5
                }}
            ><Text style={styles.movieCardStyle.animatedTextStyle}>{prop.genre}</Text></Animated.View>
            <View style={styles.movieCardStyle.imageViewStyle}>
            <Image style={styles.movieCardStyle.imageStyle} source={{uri:prop.image}} />
            </View>
        </View>
    )
}
export {MovieCard}