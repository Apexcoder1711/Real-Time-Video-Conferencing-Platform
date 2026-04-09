import express from "express";
import {createServer} from "http";

import {Server} from "socket.io";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";



import mongoose from "mongoose";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" , (process.env.PORT || 8000));

app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({limit : "40kb" , extended : true}));

app.use("/api/v1/users" , userRoutes);

// app.get("/" , (req ,res)=>{
//     res.send("hi");
// })

const start = async () =>{
    const connectionDb = await mongoose.connect("mongodb+srv://ayushsonu821312_db_user:Ayush321@apnavideocall.gysjzbb.mongodb.net/");
    console.log(`MONGO connected DB Host : ${connectionDb.connection.host}`);
    server.listen(app.get("port") , ()=>{
        console.log("Listeing on port 8000");
    })
}

start();