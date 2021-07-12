

import axios from 'axios'
import { setAlert } from './alert'
import AsyncStorage from '@react-native-async-storage/async-storage';

import setAuthToken from '../../utils/setAuthToken'


export const register = (email,password) => async dispatch => {
    const config = {
        headers : {
            'Content-type' : 'application/json'
        }
    }
    const body = JSON.stringify({email,password})
    try{
        const res = await axios.post('http://localhost:5000/api/auth/register', body , config)
        dispatch({
            type:'REGISTER_SUCCESS',
            payload : res.data
        })
        dispatch(setAlert('created sucessfully' , 'success'))
    }
    catch(err){
        const errors =  err.response.data.errors
        console.log('errror is',errors)
        if (errors){
           errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
    }
    
}

export const login = (email,password) => async dispatch =>  {
    try{
        const config = {
            headers:{
                'Content-type' : 'application/json'
            }
        }
        const body = JSON.stringify({email,password})
        const res = await axios.post('http://localhost:5000/api/auth/login' , body,config)
        
        dispatch({
            type:'LOGIN_SUCCESS',
            payload : res.data
        })
        dispatch(setAlert('login successfully' , 'success'))
        dispatch(loadUser(res.data.token))
    }
    catch(err){
        const errors =  err.response.data.errors
        console.log('errror is',errors)
        if (errors){
        errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
    }
} 

export const logout = () => async dispatch => {
    await AsyncStorage.removeItem('token')
    dispatch({
        type: 'HEADERBUTTONSTAT',
        payload: 'true'
    })
    dispatch({
        type: 'LOGOUT_SUCCESS'
    })
}


export const loadFromStorage = () => async dispatch =>  {
    const token =  await AsyncStorage.getItem("token")
    let userAccount = await AsyncStorage.getItem('userAccount')
    setAuthToken(token)
    userAccount = JSON.parse(userAccount)
    if (token) {
        dispatch({
            type: 'STORAGE_LOGIN_SUCCESS',
            payload : {token , userAccount}
        })
    }else{
        dispatch({
            type:'STORAGE_LOGIN_FAIL'
        })
    }
}


export const loadUser = (token) => async dispatch => {
    setAuthToken(token)
    const res = await axios.get('http://localhost:5000/api/auth' )
    dispatch({
        type : 'USERLOADEDSUCESS',
        payload : res.data
    })
}