import User from "@/backend/models/UserModel";
import sendMail from "@/backend/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {name,email,password } = await req.json();
        await User.create({name,email,password})

      return  NextResponse.json({message:"created sucessfully",
      data:{name,email },
        }, {status:201})
    }catch(error){
        return NextResponse.json({
            message:"An error occur while regestring user",
            error
    }, {status:500})
    }
 
}