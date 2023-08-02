const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//var bodyParser = require('body-parser')

const postRoute = require("./Routes/postRoute");

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

//connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
connectDB();
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/api/post", postRoute);

app.listen(PORT, console.log("Server started", PORT));
