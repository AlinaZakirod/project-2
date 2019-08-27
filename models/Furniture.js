const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const furnitureSchema = new Schema({
  title : String,
  x: Number,
  y: Number,
  image: String,
  width: Number,
  height: Number
});

const Furniture = mongoose.model('Furniture', furnitureSchema);
module.exports = Furniture;