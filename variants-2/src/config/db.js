import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kodex:12345san@cluster1.ilo46hx.mongodb.net/CURD",
    );
    console.log("connectDB....");
  } catch (error) {
    console.log("mongoose error", error);
  }
};

export default connectDB;
