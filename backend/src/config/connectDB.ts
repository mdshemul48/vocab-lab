import { connect } from 'mongoose';

export const connectDB = async () => {
  const mongodbConnectionUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.91aij.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  await connect(mongodbConnectionUrl);
};
