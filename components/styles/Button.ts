import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    decisionButton : {
        // color : 'green'
        flex: 0.6,
        flexDirection: 'row',
        // width : "40%",
        height : 120,
        backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10,

        borderStyle : 'solid',
        borderWidth : 3,
        borderColor : 'white',
        borderRadius : 10,

    }
    ,
    leftButton : {
       backgroundColor : '#9DD84B',
    },
    rightButton : {
        backgroundColor : '#B8F8FB',
        // right : 0,
    }
})