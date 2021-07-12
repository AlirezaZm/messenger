import {combineReducers} from 'redux'

import authReducer from './auth'
import alertReducer from './alert'
import statusReducer from './status'
import userReducer from './user'
import chatReducer from './chat'
import postReducer from './post'

const rootReducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    status: statusReducer,
    user : userReducer,
    chat : chatReducer,
    post : postReducer
})

export default rootReducers