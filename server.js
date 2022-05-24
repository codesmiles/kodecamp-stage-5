//jshint esversion:6
const express = require(`express`); //import express
const conn = require(`./mongoose`); //import mongoose
const routes = require(`./routers/routes`); //import routes

const server = express(); //create express server


server.use(express.json());// read json

server.use(`/`, routes); //use routes middleware


//Listen an d create port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
