import {StyleSheet,Dimensions} from 'react-native'

const styles={
    movieCardStyle:StyleSheet.create({
        container:{
            height:Dimensions.get("window").height* 0.5, 
            marginVertical:3
        },
        animatedTextStyle:{
            fontSize:45, 
            color:"white", 
            fontWeight:"bold"
        },
        imageViewStyle:{
            backgroundColor:"#1b1b1b"
        },
        imageStyle:{
            width:Dimensions.get("window").width * 1, 
            height:Dimensions.get("window").height * 0.5, 
            opacity:0.4
        }
    })
}
export default styles