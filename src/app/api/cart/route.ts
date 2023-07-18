import { NextRequest,NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import {v4} from 'uuid'
import { cookies } from "next/headers";
export const GET  =  async (request: NextRequest)=>{
    try{
        const res = await db.select().from(cartTable)
        return NextResponse.json({res})

    }catch(error){
        return NextResponse.json('Something went wrong')

    }
}

export const POST  =  async (request: NextRequest)=>{

    const req = await request.json()

    const uid = v4()
    const setCookies = cookies()
    const user_id = cookies().get('user_id')?.value
    
    if((!user_id)){
        setCookies.set('user_id',uid)
    }
    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            Quantity: 1,
            user_id: user_id || uid as string,
        }).returning();
        return NextResponse.json({res})

    }catch(error){
        console.log ((error as {message:string}).message);
        return NextResponse.json('Something went wrong')

    }
}