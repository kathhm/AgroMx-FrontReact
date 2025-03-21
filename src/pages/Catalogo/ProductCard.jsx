import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import style from "./catalogo.module.css";

const ProductCard = ({ producto, agregarAlCarrito, verDetalles }) => {
  const [colWidth, setColWidth] = useState("20%");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setColWidth("20%");
      } else if (width >= 768) {
        setColWidth("33.33%");
      } else {
        setColWidth("50%");
      }
    };


    handleResize();


    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="p-1"
      onClick={() => verDetalles(producto.id)}
      style={{ cursor: "pointer", flex: `0 0 ${colWidth}`, maxWidth: colWidth }}
    >
      <div id="cardCatalogo" className="card h-100 d-flex flex-column">
        <img
          src={producto.urlImage}
          className={`card-img-top ${style.productImg}`}
          alt={producto.productName}
        />
        <div className="card-body flex-grow-1">
          <h5 className="card-title text-truncate" title={producto.productName}>
            {producto.productName}
          </h5>
          <p className="card-text">
            <strong>Precio: ${producto.price} MXN</strong>
          </p>
        </div>
        <div className="card-footer d-flex flex-column m-0 p-0">
          <button
            id="botones"
            className={`btn btn-primary w-100 ${style.addToCartBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              agregarAlCarrito(producto);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
  agregarAlCarrito: PropTypes.func.isRequired,
  verDetalles: PropTypes.func.isRequired,
};

export default ProductCard;
