'use client'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'
const BookmarkButton = ({property}) => {
    const {data:session}=useSession()
    const userId=session?.user?.id
    const [isBookmarked,setIsBookmarked] =useState(false)

    useEffect(()=>{
        if(!userId) {
        return
        }
const checkBookmarkstatus=async()=>{
  try {
            const res = await fetch('/api/bookmarks/check',{method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    propertyId:property._id
                })
            })
            if(res.status===200){
                const data = await res.json()
        
                setIsBookmarked(data.isBookmarked)
            }else if(res.status===401 ||res.status===403){
                alert('user id is reuired')
            }
        } catch (error) {
            console.log(error);
            
            
        }

}
checkBookmarkstatus()
    },[property._id,userId])
    const handleClick= async ()=>{
        if(!userId){
            alert('you need to sign in')
            return
        }

        try {
            const res = await fetch('/api/bookmarks',{method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    propertyId:property._id
                })
            })
            if(res.status===200){
                const data = await res.json()
                alert(data.message)
                setIsBookmarked(data.isBookmarked)
            }else if(res.status===401 ||res.status===403){
                alert('user id is reuired')
            }
        } catch (error) {
            console.log(error);
             
            
            
        }
    }

  return ( isBookmarked ? (   <button
               onClick={handleClick}
                 className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
               >
                 <FaBookmark className="mr-2" /> remove Bookmark 
               </button>):(
                   <button
               onClick={handleClick}
                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
               >
                 <FaBookmark className="mr-2" /> Bookmark Property
               </button>
               )
            
  )
}

export default BookmarkButton