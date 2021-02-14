const Product = require("./models/Product");
const connectDB = require("../db/db");

connectDB();

export default async function getAllProducts() {
  try {
    const allProducts = await Product.find();
    return allProducts;
  } catch (error) {
    return error;
  }
}

export async function getProductById(id) {
  try {
    const product = await Product.findById(id);

    if (product) return product;
    return undefined;
  } catch (error) {
    return error;
  }
}
