import mongoose from "mongoose";

export const connectBD = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("✅ MongoDB connected sucessfully")
    } catch (error) {
        console.log("❌ MongoDB connection error:", error)
        process.exit(1)
        // status code 1 means failure
        // status code 0 means sucess
    }
}