const intialState = {
    userList :  [],
}

export default (state=intialState , action) => {
    switch(action.type){
        case 'USERLISTLOADEDSUCCESS':
            return {
                ...state , 
               userList : action.payload
            }
         }
         return state

}