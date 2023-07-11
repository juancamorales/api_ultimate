import mongoose from "mongoose";

(async ()=>{
    try {
        await mongoose.connect("mongodb+srv://juanca:juanca@cluster0.muchvce.mongodb.net/util",)
        console.log("db")    
    } catch (error) {
        console.log(error)   
    }
})()