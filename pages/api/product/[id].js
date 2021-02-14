import { getProductById } from "../../../db/controllers";

export default async (req, res) => {
  const id = req.query.id;

  try {
    const product = await getProductById(id);
  } catch (e) {
    console.error(e);
  }

  if (product) {
    res.status(200);
    res.json({ product: product });
  } else {
    res.status(404);
    res.end();
  }
};
