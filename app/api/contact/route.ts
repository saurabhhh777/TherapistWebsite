import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";

export async function POST(req:Request) {
    try {
        
     const body = await req.json();

    await connectDB();

    const savedContact = await Contact.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      message: body.message,
      preferredTime: body.preferredTime,
      service: body.service,
    });

    return NextResponse.json({ 
      
      message:"data save",
      success: true,
      data: savedContact
    
    });
  } catch (error) {
    console.error("MongoDB Save Error:", error);
    return NextResponse.json({ 
      message: 'Failed to save contact data',
      success: false
    }, { status: 500 });
  }

}