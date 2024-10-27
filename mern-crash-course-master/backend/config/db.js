import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI); // Log the URI for debugging
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
