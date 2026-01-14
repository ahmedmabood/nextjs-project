import connectDB from "@/config/database";
import Property from "@/models/Property";
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
