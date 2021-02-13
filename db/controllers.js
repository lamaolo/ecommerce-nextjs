const Product = require("./models/Product");
const connectDB = require("../db/db");

connectDB();

export default async function getAllProducts() {
  const allProducts = await Product.find();
  return allProducts;
}

export async function getProductById(id) {
  const product = await Product.findById(id);

  if (product) return product;
  return undefined;
}
