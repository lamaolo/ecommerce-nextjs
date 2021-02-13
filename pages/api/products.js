// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getAllProducts from "../../db/controllers";

export default async (req, res) => {
  const products = await getAllProducts();
  const productsLength = products.length;

  res.statusCode = 200;
  res.json({ products: products, length: productsLength });
};
