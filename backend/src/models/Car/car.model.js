const mongoose = require("mongoose");
const Car = mongoose.model(
  "Cars",
  new mongoose.Schema({
    Name: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
      default : 60000,
    },
  })
);
module.exports = Car;
