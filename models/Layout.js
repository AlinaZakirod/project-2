const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const layoutSchema = new Schema({
  title : String,
  furnitureObjects : [
    {
      type: Schema.Types.ObjectId,
      ref: "Furniture"
  }
],
author: {
  type: Schema.Types.ObjectId,
  ref: "User"
}
});

const Layout = mongoose.model('Layout', layoutSchema);
module.exports = Layout;

