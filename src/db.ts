import mongoose from "mongoose";

(async ()=>{
    try {
        await mongoose.connect("mongodb://localhost/ulti",)
        console.log("db")    
    } catch (error) {
        console.log(error)   
    }
})()