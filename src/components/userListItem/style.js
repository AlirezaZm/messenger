import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'90%',
        zIndex: -10
    },
    leftContainer:{
        flexDirection:'row'
    },
    midContainer:{
        alignItems:'flex-start',
        marginLeft:10,
        justifyContent:'space-around',
        padding: 10

    },
    avatar: {
        width:60,
        height: 60,
        borderRadius:50
    },
    name:{
        fontSize:20,
        fontWeight: 'bold'
    },
    lastMessage:{
        fontSize:14,
        color: 'grey',
        flexShrink: 1,
        width:180
    },
    time:{
        fontSize:14,
        color: 'grey'
    }
    
    
})



export default styles