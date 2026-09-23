const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://havocjack2942002_db_user:FwCaEfMwzG4OfroL@cluster0.grekmpf.mongodb.net/?appName=Cluster0");

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
  }
};

module.exports = connectDB;