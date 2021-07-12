import React from 'react'


import {View,TextInput,StyleSheet, TouchableOpacity,Text,KeyboardAvoidingView} from 'react-native'
import { useDispatch } from 'react-redux' 
import {useNavigation} from '@react-navigation/native'

import {register} from '../../redux/actions/auth'

//Component Login function start
const Register = () => {

    const navigation = useNavigation()

    const [email , setEmail] = React.useState('Sfsf@gmail.com')
    const [password,setPassword] = React.useState('efefefwefef')

    const onEmailChange = (e) => {
        setEmail(e)
    }
    const onPasswordChange = (e) => {
        setPassword(e)
    }
    const dispatch = useDispatch()

    const onsubmit = () => {
        dispatch(register(email,password,navigation))
    }
 
    return(
        <KeyboardAvoidingView keyboardVerticalOffset={20}  behavior='height'  style={{justifyContent:'center' , alignItems: 'center'}}>
            <TextInput style={styles.textInput} value={email} placeholder='Email' placeholderTextColor='black' onChangeText={ e => onEmailChange(e)} />
            <TextInput style={styles.textInput} value={password} placeholder='Password'  placeholderTextColor='black' onChangeText={e => onPasswordChange(e)} />
            <TouchableOpacity style={styles.buttonContainer} onPress={onsubmit}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    textInput:{
        width:'80%',
        height: 60,
        borderWidth: 1,
        borderColor : 'rgba(0,0,0,0.2)',
        padding : 10,
        borderRadius: 20,
        marginBottom: 10,
        elevation: 0
    },
    buttonContainer:{
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'grey',
    }
})

export default Register