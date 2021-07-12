import AsyncStorage from '@react-native-async-storage/async-storage';

const intialState = {
    token : [],
    isAuthenticated : false,
    user:null,
    loading :  true,
}

export default (state=intialState , action) => {
    switch(action.type){
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            AsyncStorage.setItem('token' , action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: {}
             }

        case 'STORAGE_LOGIN_SUCCESS':
            return {
                ...state,
                token : action.payload.token,
                isAuthenticated: true,
                loading: false,
                user: action.payload.userAccount,
            }
        case 'STORAGE_LOGIN_FAIL':
            return {
                ...state,
                token : [],
                isAuthenticated: false,
                loading: false,
                user: {},
            }  
        case 'LOGOUT_SUCCESS':
            return {
                ...state , 
                token : [],
                isAuthenticated: 'false',
                loading : false,
                user: {}
            }  
        case 'USERLOADEDSUCESS':
             AsyncStorage.setItem('userAccount' , JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload
            }
    }

    return state
}