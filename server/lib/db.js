import dns from 'dns'
dns.setServers(["8.8.8.8"]);
import mongoose from "mongoose";

//Function to connect to the mongodb database
export const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', () =>{
            console.log("Database Connected")
        })

        await mongoose.connect(`${process.env.MONGODB_URI}/chatting-app`)
    } catch (error) {
        console.log(error);
    }
}