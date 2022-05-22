//jshint esversion:6

const express = require(`express`); //import express
const server = express(); //create express server

const mongoose = require("mongoose"); //import mongoose

// connect to mongoDB
// mongoose
//   .connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => {
//     console.log(err.message);
//     process.exit(1);
//   });


// get request to the root of the server
server.get(`/`, (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

// post request to the root from the server
server.post(`/`, (req, res) => {});


//Listen an d create port

const PORT = process.env.PORT  ||3000;

server.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`);
})