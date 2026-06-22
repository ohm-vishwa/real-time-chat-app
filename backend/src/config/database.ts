import mongoose from "mongoose";

export const connectBD = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if(!mongoUri){
            throw new Error("MONGODB_URI environment varibale is not defined")
        }

        await mongoose.connect(mongoUri as string)
        console.log("✅ MongoDB connected sucessfully")
    } catch (error) {
        console.log("❌ MongoDB connection error:", error)
        process.exit(1)
        // status code 1 means failure
        // status code 0 means sucess
    }
}