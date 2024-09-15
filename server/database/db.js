import mongoose from "mongoose";

export const Connection = async () => {
  const url = process.env.MONGO_URL

  // const URI = 'mongodb://localhost:27017/FlipkartClone'
  try {
    await mongoose.connect(url, {});
    console.log('Database connected Successfully')
  } catch (error) {
    console.log('Error while connecting to database', error.message)
  }
}


