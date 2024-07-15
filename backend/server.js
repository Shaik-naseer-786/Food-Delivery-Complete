import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config 

const app=express();

const port =4000;


//middleware 
app.use(express.json())
app.use(cors())
app.use(cookieParser());
// db connection

connectDB();


// api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)


app.get('/',(rq,res)=>{
    res.send("its working");
})

app.listen(port,()=>{
    console.log(`server is listening at port number ${port}`);
})