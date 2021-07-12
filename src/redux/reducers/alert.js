const initialState = [
]

export default function(state=initialState,action){
    switch(action.type){
        case 'SET_ALERT':
            return [...state,action.payload]

        case 'REMOVE_ALERT':
            return state.filter(alert => alert.id !== action.payload)
    }
    return state
}