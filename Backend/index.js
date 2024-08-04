//const express = require("express");
//const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/Book.Route.js" 
import cors from "cors";
import userRoute from "./Route/User.route.js"
import contactRoute from "./Route/Contact.Route.js"


const app = express();
app.use(express.json());

app.use(cors());
dotenv.config();

//PORT info is getting from .env file that contain port on which the Backend is running
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDb_URL;

// MONGODB Connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Sucessfully connected to Database")
} 
catch (error) {
  console.log("Error",error)
}

// Defining Routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.post("/contact",contactRoute)


app.listenerCount(PORT,()=>{
  console.log('Server is running on Port ${PORT}');
})


/*app.get("/", (req, res) => {
  res.send(PORT);
});*/


















app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
