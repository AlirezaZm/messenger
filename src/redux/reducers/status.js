const intialState = {
    headerButtonOpen : true
}

export default (state=intialState , action) => {
    switch(action.type){
        case 'HEADERBUTTONSTAT':
            return {
                ...state , 
                headerButtonOpen: action.payload
            }
         }
         return state

}