import express from "express";
import dotenv from "dotenv";
import database from "./lib/database.js";
import artsRouter from "./router/arts.js";

dotenv.config();

database.init();

const server = express();

server.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use("/arts", artsRouter);
