'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import PageLoader from 'next/dist/client/page-loader'
import PropertyCard from '@/components/PropertyCard'

const SavedpropertiesPage = () => {
    const [properties,setProperties]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchSvedProperties=async()=>{
            try {
                const res=await fetch('/api/bookmarks')
                if(res.status===200){
                    const data=await res.json()
                    setProperties(data)
                }else{
                    console.log(res.statusText);
                    alert('failed to fetch saved')
                    
                }
            } catch (error) {
                console.log(error);
                alert('failed to fetch saved')
            }finally{
                setLoading(false)
            }
        }
        fetchSvedProperties()
    },[])
  return loading ?(<PageLoader  />):(
       <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {properties.length === 0 ? (
          <p>No saved properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SavedpropertiesPage