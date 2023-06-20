import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('connected to the database');
      })
      .catch(error => {
        console.log('connection to the database failed');
        console.error(error);
        process.exit(1);
      });

    // await mongoose.connect(process.env.MONGODB_URI, {
    //   dbName: 'share_promo',
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // await mongoose.connect(process.env.MONGODB_URI);
    // .than(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${PORT}`)));
    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB is NOT connected');
    console.log(error);
  }
};
