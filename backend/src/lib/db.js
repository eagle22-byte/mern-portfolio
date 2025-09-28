import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || undefined;
  if (!uri) throw new Error('MONGODB_URI is not set in environment');
  const options = dbName ? { dbName } : {};
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, options);
  console.log('Connected to MongoDB');
};
