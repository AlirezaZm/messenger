import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({

    mainContainer :{
        flex:1,
        width:width,
        height: height
    },
    headerImageContainer:{
        width: '100%',
        height: '30%',
    },
    headerImage:{
        width: ' 100%',
        height: '100%',
        position:'absolute',
    },
    leftArrow:{
        marginLeft: 15,
        marginTop: 15
    },
    nameContainer:{
        width: '100%',
        height: ' 12%',
        marginTop:20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignSelf:'center',
        padding: 20,
        elevation: 0.5,
        justifyContent: 'center'

    },
    nameText:{
        color: 'black',
        fontSize: 21,
        fontWeight: 'bold',
    },
    actionBlockContainer:{
        width: '100%',
        height: ' 8%',
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignSelf: 'center',
        padding: 10,
        elevation: 0.5,
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection:'row',
    },
    actionBlockText:{
        color: 'red',
        fontSize: 21,
        fontWeight: 'bold'
    }
})

export default styles