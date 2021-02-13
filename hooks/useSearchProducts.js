import { useState, useMemo } from "react";

function useSearchProducts(products) {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useMemo(() => {
    const result = products.filter((producto) => {
      return producto.nombre.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredProducts(result);
  }, [products, query]);

  return [setQuery, filteredProducts];
}

export default useSearchProducts;
