// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express"
import connectDB from "./db/index.js";
import { app } from "./app.js"


dotenv.config({
    path: './env'
})

const port = process.env.PORT || 4000

connectDB()
.then(() =>{
    app.listen( port ,() => {
        console.log(` Server is running at port : ${port}`);
    })
    app.on("Error ", () =>{
        console.log("Error: ", error);
        throw err
    })
})
.catch((err) =>{
    console.log("MONGO db connection faild !!! ", err);
})








/*
const app = express()
( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("Error ", () =>{
        console.log(("Error: ", error));
        throw error

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        
       })
    } catch (error) {
        console.log("ERROR: ", error);
        throw err
    }
})()
*/