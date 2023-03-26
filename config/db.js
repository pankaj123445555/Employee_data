const mongoose = require("mongoose");
const uri = 'mongodb+srv://pankajkr12022001:pankaj123@cluster0.zckd2tu.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri,
      
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.log(`error occured ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
