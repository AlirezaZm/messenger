import axios from 'axios'

export const loadUserList = () => async dispatch => {
    const res = await axios.get('http://localhost:5000/api/user')
    dispatch({
        type:'USERLISTLOADEDSUCCESS',
        payload : res.data
    })     
 }

 