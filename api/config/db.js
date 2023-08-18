import mongoose from "mongoose";

//mongodb connection
export const mongoDbConnect = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected successfully`.bgGreen.yellow);
  } catch (error) {
    console.log(error.message);
  }
};
