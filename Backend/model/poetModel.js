const mongoose = require("mongoose");

const poetry = new mongoose.Schema({
  Author: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Poetry: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Poetry", poetry);
