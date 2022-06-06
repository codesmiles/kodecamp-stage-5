const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  name: { type:String, required: true },
  course: { type:String, required: true },
  year: { type:Number, required: true}
});

module.exports = mongoose.model("schema", mongooseSchema);

db.collection.insert({
  _id: 2,
  name: "pencil",
  price: 1.99,
  stock: 50,
  review: [
    {
      author: "joe",
      rating: 3,
      reviewText: "fair product",
    },
    {
      author: "martin",
      rating: 5,
      reviewText: "the best product",
    },
    {
      author: "joe",
      rating: 1,
      reviewText: "Just bad",
    },
  ],
});