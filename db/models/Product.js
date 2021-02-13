const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.products || mongoose.model("products", ProductSchema);
