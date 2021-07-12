import React from 'react'


import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {useDispatch ,  useSelector } from 'react-redux'

export default function Alert() {


   
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    return (

       <FlatList
       style={{width:'100%',height:'100%'}}
       contentContainerStyle={{}}
        data ={alert}
        renderItem ={ ({item}) => {
            return (
                <View style= {[styles.alertContainer , {
                    backgroundColor: item.alertType === 'success' ?'green' : 'red',
                }] }>
                    <Text style={styles.alertText}>{item.msg}</Text>
                    <TouchableOpacity onPress={() => dispatch({type:'REMOVE_ALERT',payload:item.id})}>
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                </View>
            )
        } }
        />
       
    )
}

const styles = StyleSheet.create({
    alertContainer : {
        backgroundColor:'red' ,
         width: '100%',
         height:50,
         borderRadius: 20,
         alignItems: 'center',
         justifyContent: 'space-between',
         alignSelf:'center',
         marginBottom: 5,
         flexDirection: 'row',
         paddingHorizontal : 20

    },
    alertText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    closeButton:{
        fontSize: 20,
        color: 'white'
    }
})

