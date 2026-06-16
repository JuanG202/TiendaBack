const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  emoji: {
    type: String,
    default: "📦"
  }
});

module.exports = mongoose.model("Producto", productoSchema);