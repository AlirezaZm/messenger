const initialState = {
    posts : []
}

export default (state=initialState , action) => {
    switch (action.type){
        case 'FETCHALLPOSTSUCCESS':
            return {
                ...state,
                posts : action.payload
            }
            default:
                return state
    }
}