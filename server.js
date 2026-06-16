require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const clientesRoutes = require("./routes/clienteRoutes");
const productosRoutes = require("./routes/productoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Mongo conectado");
  })
  .catch((err) => {
    console.error("❌ Error Mongo:");
    console.error(err);
  });

app.get("/", (req, res) => {
  res.json({
    mensaje: "Backend funcionando correctamente"
  });
});

app.use("/api/clientes", clientesRoutes);
app.use("/api/productos", productosRoutes);

module.exports = app;