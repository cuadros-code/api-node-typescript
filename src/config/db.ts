import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    })
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

export default dbConnect