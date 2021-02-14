import getAllProducts from "../../db/controllers";

export default async (req, res) => {
  try {
    const products = await getAllProducts();
    const productsLength = products.length;

    res.statusCode = 200;
    res.json({ products: products, length: productsLength });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
