import PropTypes from "prop-types";
import style from "./catalogo.module.css"; // Asegúrate de que la extensión sea '.module.css'

const ProductCard = ({
  producto,
  agregarAlCarrito,
  verDetalles,
}) => {
  return (
    <div
      className="col-6 col-sm-4 col-md-3 col-lg-2 p-1"
      onClick={() => verDetalles(producto.id)}
      style={{ cursor: "pointer" }}
    >
      <div id="cardCatalogo" className="card h-100 d-flex flex-column">
        <img
            //cambiar el atributo que viene de nuestro json del back
          src={producto.urlImage}
          className={`card-img-top ${style.productImg}`} // Usando el estilo de módulo
          alt={producto.productName}
        />
        <div className="card-body flex-grow-1">
          <h5 className="card-title text-truncate" title={producto.productName}>
            {producto.productName}
          </h5>
          <p className="card-text">
            <strong>Precio: ${producto.price}MXN</strong>
          </p>
        </div>
        <div className="card-footer d-flex flex-column m-0 p-0">
          <button id="botones"
            className={`btn btn-primary w-100 ${style.addToCartBtn}`} // Usando el estilo de módulo
            onClick={(e) => {
              e.stopPropagation();
              agregarAlCarrito(producto);
            }}
          >
            Agregar al carrito
          </button>
          {/*<button
            className={`btn btn-primary w-100 ${style.modifyBtn}`} // Usando el estilo de módulo
            onClick={(e) => {
              e.stopPropagation();
              modificarProducto(producto);
            }}
          >
            Modificar
          </button>
          <button
            className={`btn btn-primary w-100 ${style.deleteBtn}`} // Usando el estilo de módulo
            onClick={(e) => {
              e.stopPropagation();
              eliminarProducto(producto.id);
            }}
          >
            Eliminar
          </button>*/}
        </div>
      </div>
    </div>
  );
};

// Agregar validación de props
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
