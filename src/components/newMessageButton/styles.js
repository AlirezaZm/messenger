import { StyleSheet } from "react-native";

import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        width:60,
        height: 60,
        borderRadius: 50 , 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        bottom: 40
    }
})


export default styles