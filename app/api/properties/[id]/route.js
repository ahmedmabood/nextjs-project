import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
// GET /api/properties/:id
export const GET=async(request,{params})=>{

    try {
        await connectDB();
        const { id } = await params;
        const property = await Property.findById(id)
        if(!property) return new Response('Property Not Found', {status: 404})
        // console.log(property);
        
        return new Response(JSON.stringify(property),{status:200});     
        
    } catch (error) {
        console.log(error);
        
        return new Response("Internal Server Error",{status:500});
    }
}

export const DELETE =async(request,{params})=>{

    try {
        await connectDB();
        const { id } = await params;
        const sessionUser=await getSessionUser()
        if(!sessionUser){
            return new Response('User id requires',{status:401})
        }
        const {userId}=sessionUser
        const property = await Property.findById(id)
        if(!property) return new Response('Property Not Found', {status: 404})
        // console.log(property);
        if(property.owner.toString()!==userId){
            return new Response('Unauthorized',{status:401})
        }
        await property.deleteOne()
        return new Response('propertry Deleted',{status:200});     
        
    } catch (error) {
        console.log(error);
        
        return new Response("Internal Server Error",{status:500});
    }
}
// PUT request /api/properties/:id
export const PUT=async(request,{params})=>{
    try {
        await connectDB()

        const { id } = await params;
        const sessionUser= await getSessionUser()
        
        if(!sessionUser ||!sessionUser.userId){
           return new Response('User ID is required',{status:401}) 
        }
        const{userId}=sessionUser
        const formData=await request.formData()
        const amenities=formData.getAll('amenities')
        // get property to update
        const existingProperty= await Property.findById(id)
        if(!existingProperty){
            return new Response('property not exist',{status:404})
           
        }

         if(existingProperty.owner.toString()!==userId){
                return new Response('Unauthorized',{status:401})
            }

        const propertyData={
            type:formData.get('type'),
            name:formData.get('name'),
            description:formData.get('description'),
            location:{
                street:formData.get('location.street'),
                 state:formData.get('location.state'),
                  city:formData.get('location.city'),
                   zipcode:formData.get('location.zipcode'),
            },
             beds:formData.get('beds'),
             baths:formData.get('baths'),
             square_feet:formData.get('square_feet'),
             amenities,
             rates:{
                weekly:formData.get('rates.weekly'),
                monthly:formData.get('rates.monthly'),
                nightly:formData.get('rates.nightly'),
             },
             seller_info:{
                name:formData.get('name'),
                email:formData.get('email'),
                phone:formData.get('phone'),
             },
             owner:userId,
        }
          

      // update propert
      await Property.findByIdAndUpdate(id,propertyData)
        // return Response.redirect(`${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`)


        return new Response(JSON.stringify({message:'Property updated'}),{status:200})
        
    } catch (error) {
        console.log(error)

        return new Response('failed to add propert',{status:500})
    }
}
