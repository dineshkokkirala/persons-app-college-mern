const config = require("config");
const uri = config.get("mongoURI");
const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = DBConnection;
