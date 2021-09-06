import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const init =  function(){
    const db =  mongoose.connection;
    db.on("error", console.error);
    console.log("db is online");
}

export default {init};