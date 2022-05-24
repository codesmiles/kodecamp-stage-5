const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  name: { type:String, required: true },
  course: { type:String, required: true },
  year: { type:Number, required: true}
});

module.exports = mongoose.model("schema", mongooseSchema);