import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../constants/Colors'

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerContainer: {
       width: width,
       height: height/10,
       maxHeight: 200,
       backgroundColor: Colors.light.tint,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: 20,
        position:'absolute',
        zIndex:2
   },
   leftContainer:{
       width:'40%',
       flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'   
    },
    rightContainer: {
        flexDirection: 'row-reverse',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight:5
    },
    dropDownContainer: {
        zIndex: 5,
        backgroundColor: 'rgba(0,0,0,0)',
        width: width,
        height: height - height / 15,
        top: height / 15,
        position: 'absolute',
        alignItems: 'flex-end'
    },
    dropDown: {
        width: 150,
        maxHeight:200,
        backgroundColor:'white',
        position:'absolute',
        right:width/12,
        borderRadius:10,
        padding:10,
        alignItems: 'stretch',
        justifyContent:  'flex-start'
    },
    dropDownContentContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingTop:4
    },
    dropDownContentText:{
        fontSize:16,
        fontWeight: 'bold'
    }
    
    
    
})

export default styles