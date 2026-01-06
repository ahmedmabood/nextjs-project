import connectDB from "@/config/database";

export const GET=async(request)=>{

    try {
        await connectDB();
        return new Response(JSON.stringify({ message: "API is running successfully" }),{status:200});     
        
    } catch (error) {
        return new Response("Internal Server Error",{status:500});
    }
}