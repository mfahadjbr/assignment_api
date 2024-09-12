'use client'
import React, { useEffect, useState } from 'react'
import PostCards from '../components/PostCards'
import Link from 'next/link'
export default function page() {
    const [postData,setPostData]=useState([])
    useEffect(() => {
        getAllPost()
    },[])
    const getAllPost= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json()
    setPostData(data)
    }
  return (
    <div className='flex flex-wrap justify-center'>
      {postData.map((item:any)=>{
        return(
            <Link href={`/Blog/${item.id}`}><PostCards postData={item}/></Link>
        )
      })}
    </div>
  )
}
