import { StyleSheet ,Dimensions} from "react-native";

import Colors from '../../constants/Colors'

const  {width , height} = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        height: height- height/7,
        justifyContent:'space-between',
        position: 'absolute'
    },
    postListContainer: {
        height: height -height/2 , 
        width: width,
        marginTop:15
    },
    postListContainerTitleContainer: {
        width: width,
        height: 40,
        backgroundColor: 'grey',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postListTitleText: {
        fontSize: 20,
        color : 'white',
        fontWeight: 'bold'
    },
    postListContentContainer:{
        width: width,
        height: '100%'
    },

    postCreateContainer:{
        width: width,
        height: '25%',
        marginBottom:10,
        backgroundColor: '#f1f1f1'
    },
    postCreateTitleContainer:{
        width: width,
        height: '25%',
        backgroundColor: 'grey',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postCreateTitleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    postCreateContentContainer:{
        width:width * 0.95,
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center'

    },
    postCreateTextInput:{
        width: '85%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        elevation:2
    },
    iconContainer: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    }, 

    // Post item style
    mainContainer:{
        width: 0.9 * width,
        alignSelf: 'center',
        marginTop: 10,
        paddingTop:10,
        height:150
    },
    headerContainer:{
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerLeft:{
        flexDirection:'row',
        width: '50%',
        alignItems:'center'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius: 50,
    },
    headerTitle:{
        fontSize:16,
        fontWeight: "bold",
        marginLeft:5
    },
    contentContainer: {
        width:'100%',
        height: '65%',
        borderRadius:10,
        backgroundColor: '#d1d1d1',
        padding: 10,
        elevation:5
    },
    contentText: {
        fontSize: 19,
        fontFamily: 'TimesNewRoman'
    }
})


export default styles
