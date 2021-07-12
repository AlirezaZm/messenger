export const headerButtonStat = (status) => async dispatch => {
   dispatch({
       type: 'HEADERBUTTONSTAT',
       payload: status
   })
    
}