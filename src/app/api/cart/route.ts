import { NextRequest,NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const GET  =  async (request: NextRequest)=>{
    try{
        const user_id = request.nextUrl.searchParams.get('user_id') 
        const res = await db.select().from(cartTable).where(eq( cartTable.user_id, user_id as string));
        return NextResponse.json(res)

    }catch(error){
        return NextResponse.json('Something went wrong')

    }
}

export const POST  =  async (request: NextRequest)=>{

    const req = await request.json()
    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            Quantity: req.Quantity,
            user_id: req.user_id,
        }).returning();
        return NextResponse.json({res})

    }catch(error){
        console.log ((error as {message:string}).message);
        return NextResponse.json('Something went wrong')

    }
}