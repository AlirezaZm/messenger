
const initialState = [
    loaded_chat = {},
    chatList = [],
    loaded_chat_cross_user = null
]

export default function(state=initialState,action){
    switch(action.type){
        case 'CHATLOADEDSUCCESS':
            return {
                ...state , 
                loaded_chat : action.payload.data,
                loaded_chat_cross_user :  action.payload.crossUser
            }
        case 'CHATADDSUCCESS':
            return {
                ...state,
                loaded_chat : action.payload
            }
        case 'CHATLISTLOADEDSUCESS':
            return {
                ...state , 
                chatList : action.payload
            }
    }
    return state
}