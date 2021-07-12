import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        backgroundColor: '#e5e5e5',
        marginRight: 50,
        borderRadius: 10,
        padding: 10,
    },
    name:{
        color : Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5
    },
    message:{

    },
    time:{
        alignSelf: 'flex-end',
        color: 'grey'
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        right:0,
        top:10,

    },
    arrowUpRight: {
        borderTopWidth: 0,
        borderRightWidth: 30,
        borderBottomWidth: 30,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: "'rgb(220,248,197)",
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
})

export default styles