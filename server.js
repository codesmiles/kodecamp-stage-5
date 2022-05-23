//jshint esversion:6
const express = require(`express`); //import express
// const mongoose = require("mongoose"); //import mongoose
const conn = require(`./mongoose`); //import mongoose

const server = express(); //create express server

const routes = require(`./routers/routes`); //import routes
server.use(`/`, routes); //use routes


//Listen an d create port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
