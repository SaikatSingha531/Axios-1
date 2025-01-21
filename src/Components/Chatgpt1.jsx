import React,{useEffect, } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Chatgpt1() {

    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            setdata(response.data);
            setLoading(false);
        })
        .catch(error =>{
            seterror("Somthing was wrong")
            setLoading(false)
        })
    },[])

  return (
    <div>
           {loading && <p>Loading...</p>} 
      {error && <p>{error}</p>}      {/* Show the error message if there was a problem */}
      
      {/* If we have posts, display them as a list */}
      {data.length > 0 && (
        <ul>
          {data.map(post => (
            <ul>
            <li key={post.id}>*{post.title}</li> 
            </ul>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Chatgpt1


