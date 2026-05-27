import mongoose from "mongoose";

export let connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kodex:12345san@cluster1.ilo46hx.mongodb.net/curd",
    );
    console.log("connectDB...");
  } catch (error) {
    console.log("mongoose error", error);
  }
};
