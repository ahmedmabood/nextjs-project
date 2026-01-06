const apiDomain=process.env.NEXT_PUBLIC_DOMAIN_API || null
// get all propetry
async function fetchProperties(){
  try {

    if(!apiDomain){
        return []
    }
    const res = await fetch(`${apiDomain}/properties`,{ cache: 'no-store' })
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data.properties
  } catch (error) {
    console.log(error);
    return []
  }
}
// get single property
async function fetchProperty(id){
  try {

    if(!apiDomain){
        return null
    }
    const res = await fetch(`${apiDomain}/properties/${id}`)
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    console.log(data);
    
    return data
  } catch (error) {
    console.log(error);
    return null
  }
}

export {fetchProperties,fetchProperty}