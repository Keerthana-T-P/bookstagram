import mongoose from "mongoose";
let isconnected=false;
export const connecttoDB=async()=>{
    mongoose.set('strictQuery',true)
    if (isconnected){
        console.log('MongoDB is already connected')
        return
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"bookstagram",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isconnected=true;
        console.log('Mongodb is connected')
    }catch(error){
        console.log(error)
    }
}