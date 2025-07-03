// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URL as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}
else{
    console.log("Database connect");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  mongoose.connect(MONGODB_URI)
  .then(()=>{
    console.log("MongoDB is Connected");
  })
  .catch((error)=>{
    console.log(error);
  })
}
