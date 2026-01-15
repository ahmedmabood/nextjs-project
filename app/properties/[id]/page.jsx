'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProperty } from '@/utils/request'
import PropertyImages from '@/components/propertyImages'
import PropertyHeader from '@/components/PropertyHeader'
import PropertyDeails from '@/components/PropertyDeails'
import Link from 'next/link'
import BookmarkButton from '@/components/bookmarkButton'
import PropertyContactForm from '@/components/PropertyContactForm'
import ShareButton from '@/components/ShareButton'
import { FaArrowLeft, FaBookmark, FaShare, FaPaperPlane } from 'react-icons/fa'

const PropertyPage = () => {
 
    const {id}=useParams()
  const [property,setProperty]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const fetchPropertiesData =async ()=>{
      if(!id) return
      try {
        const property=await fetchProperty(id)
        console.log(property);
        
        setProperty(property)
      } catch (error) {
        console.log('error fetching property',error);
      } finally {
        setLoading(false)
      }
    }
    fetchPropertiesData()
  },[id])
  if(!property && !loading){
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>property Not found</h1>
    )
  }
  return ( <>
    {!loading && property && (
      <>
      <PropertyHeader image={property.images[0]} />
         <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft />
           Back to Properties
        </Link>
      </div>
    </section>
     {/* <!-- Property Info --> */}
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
          <PropertyDeails property={property} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">       
           <BookmarkButton property={property} />   
           <ShareButton  property={property}/>
          <PropertyContactForm property={property} />
          </aside>
        </div>
      </div>
    </section>
    <PropertyImages images={property.images} />
      </>
    )}

  </>
  )
}

export default PropertyPage