import React from 'react'
import { useDispatch } from 'react-redux'

import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {login} from '../../redux/actions/auth'

const Login = () => {

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
        dispatch(login(email,password))
    }

    return(
        <View  style={{justifyContent:'center' , alignItems: 'center'}}>
            <TextInput value={email} style={styles.textInput} placeholder='Email' placeholderTextColor='black' onChangeText={ e => onEmailChange(e)} />
            <TextInput value={password} style={styles.textInput} placeholder='Password'  placeholderTextColor='black' onChangeText={ e => onPasswordChange(e)} />
            <TouchableOpacity style={styles.buttonContainer} onPress={onsubmit}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
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

export default Login