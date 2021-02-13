import React, { useState, useEffect } from "react";
import Link from "next/link";

import ItemsCarousel from "react-items-carousel";

const ProductCarousel = ({ products = [] }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);
  const chevronWidth = 40;

  useEffect(() => {
    addEventListener("resize", handleResize);
    function handleResize() {
      let items = window.innerWidth < 992 ? 1 : 2;
      setItemsToShow(items);
    }

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={itemsToShow}
        gutter={20}
        leftChevron={
          <button className="nextButton left">
            <i className="fas fa-angle-left"></i>
          </button>
        }
        rightChevron={
          <button className="nextButton right">
            {" "}
            <i className="fas fa-angle-right"></i>
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        {products.slice(0, 5).map((product) => (
          <div
            key={product._id}
            style={{
              height: "350px",
              background: `url(${product.foto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <div className="Product-information">
              <p className="Product-name">{product.nombre}</p>
              <p className="Product-price">$ {product.precio}</p>
              {/* Todo esto es para que la URL quede en minusculas, separada por guiones y sin caracteres especiales */}
              <Link href={`/producto/${product._id}`}>
                <a>
                  <button type="button" className="btn btn-primary">
                    Ver detalles
                  </button>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </ItemsCarousel>

      <style jsx>{`
        .Product-information {
          opacity: 0;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.6);
          transition: opacity 0.25s ease-in-out;
        }

        .Product-information:hover {
          opacity: 1;
        }

        .Product-information p {
          font-family: "Playfair Display", serif;
          font-weight: 800;
          color: white;
        }

        .Product-name {
          margin: 0;
          font-size: 3rem;
        }

        .Product-price {
          font-size: 2.5rem;
        }

        .nextButton {
          object-fit: cover;
          height: 31px;
          width: 100%;
          font-size: 2rem;
          color: white;
          background: #852d14;
          border-radius: 50%;
          border: none;
          outline: none;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
        }

        .nextButton.left {
          margin-right: 10px;
        }

        .nextButton.right {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
