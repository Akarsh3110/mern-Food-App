const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  items: [MenuItemSchema], // Array of menu items
});

module.exports = mongoose.model("Menu", MenuSchema);
