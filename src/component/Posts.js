import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { useSelector } from 'react-redux'

const Posts = () => {
    const isdark=useSelector(state=>state.reducer.isDark)
    const[posts,setPost]=useState()
    const fix=0
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setPost(res.data)).catch(err=>console.log(err))
    },[fix]
    )
  return (
    <div  style={isdark?{backgroundColor:"white"}:{backgroundColor:"black"}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>{posts?.map(el=><div style={{paddingTop:"20px"}}><PostCard el={el} key={el.id} /></div>)}</div>
    </div>
  )
}

export default Posts