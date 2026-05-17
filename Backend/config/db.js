const monngoose = require("mongoose");
const connectedtDB = async () => {
  try {
    await monngoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectedtDB;