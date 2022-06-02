const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected ", connect.connection.host);
  } catch (err) {
    console.log(err, "error in db connect");
    process.exit();
  }
};

module.exports = connectDB;
