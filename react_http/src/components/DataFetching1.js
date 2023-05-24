import React,{useState,useEffect} from 'react';
import axios from 'axios'

function DataFetching1() {
    const [loading,setloading] =useState(true)
    const [error,setError] = useState('')
    const [post,setpost] =useState({})

    useEffect =(() =>{
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
            setloading(false)
            setpost(response.data)
            setError('')
         })
         .catch(error =>{
            setloading(false)
            setpost({})
            setError('something went wrong')
         })
    },[])

    
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    );
}

export default DataFetching1;