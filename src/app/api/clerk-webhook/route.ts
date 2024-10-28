import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
        try {
            console.log("At the Route");
            
            const body = await req.json()
            console.log("😍",body);
            const {id, email_addresses, first_name,image_url} = body?.data
    
            const email = email_addresses[0]?.email_address

            await db.user.upsert({
                where: {clerkId: id},
                update: {
                    email,
                    name: first_name,
                    profileImage: image_url,
                },
                create: {
                    clerkId: id,
                    email,
                    name: first_name || '',
                    profileImage: image_url || ''
                }
            })
            return new NextResponse("User Updated In the database Successfully", {
                status: 200
            })
        } catch (error) {
            console.log("Error Updating Databse", error);
            return new NextResponse('Error Updating User In DB', {
                status: 500
            })          
            
        }
}