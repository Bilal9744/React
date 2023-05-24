import React,{useState,useEffect} from 'react';
import axios from 'axios'

function DataFetching(props) {
    const [post,setpost] = useState({})
    const[id,setid] = useState(1)
    const[idfromButtonClick,setIdFromButtonClick]=useState(1)
    const handleClick =() =>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
        .then(res => {
            console.log(res)
            setpost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idfromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={e => setid(e.target.value)}  />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                posts.map(post =><li key={post.id}>{post.title}</li>)

                }
            </ul> */}
        </div>
    );
}

export default DataFetching;