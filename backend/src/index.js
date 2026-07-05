import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js"
import { clerkMiddleware } from "@clerk/express"
import cors from "cors";


const app = express();
const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL


// middleware
app.use(express.json());
app.use(cors({origin:FRONTEND_URL, credentials:true}));
app.use(clerkMiddleware());

app.listen(PORT, () =>  {
    connectDB();
    console.log("Server is up and running on port" , PORT);
    
});
