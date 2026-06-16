const mongoose = require("mongoose");

const historialSchema = new mongoose.Schema({
  tipo: String,
  concepto: String,
  valor: Number,
  fecha: String,
  items: [
    {
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ]
});

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  saldo: {
    type: Number,
    default: 0
  },
  historial: [historialSchema]
});

module.exports = mongoose.model("Cliente", clienteSchema);