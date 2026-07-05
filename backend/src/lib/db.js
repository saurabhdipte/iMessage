import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            console.error("MONGO_URI is required");
            // return false;
        }

        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDB connected", conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}