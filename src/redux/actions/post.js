import axios from 'axios'

export const addPost = (text) => async dispatch => {
    const body = JSON.stringify({text:text})
    const config = {
        headers : {
            'Content-type' : 'application/json'
        }
    }

    const res = axios.post('http://localhost:5000/api/post',body,config)
    console.log(res)
}


export const fetchAllPosts = () => async dispatch => {
    try{
        const res = await axios.get('http://localhost:5000/api/post')
        dispatch({
            type: 'FETCHALLPOSTSUCCESS',
            payload: res.data
        })
    }
    catch(err){
        console.log(err)
    }
    
}