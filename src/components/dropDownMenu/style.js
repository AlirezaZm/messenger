import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
   container : {
    position:'absolute',
    backgroundColor:'rgba(255,255,255,1)',
    width:200,
    height:300,
    top:0,
    right: -10,
    elevation: 20,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
   },
   itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderBottomColor:'rgba(0,0,0,.2)',
      borderBottomWidth:.5,
      paddingVertical: 10
   }
})

export default styles