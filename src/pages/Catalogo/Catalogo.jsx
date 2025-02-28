import React, { useEffect, useState } from "react";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar los productos desde localStorage cuando se monta el componente
    const itemsData = localStorage.getItem("items");
    if (itemsData) {
      setProductos(JSON.parse(itemsData));
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Catálogo de Productos</h2>
      <div className="row">
        {productos.map((producto, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={producto.imagenProducto} className="card-img-top" alt={producto.producto} />
              <div className="card-body">
                <h5 className="card-title">{producto.producto}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                <p className="card-text"><strong>Stock:</strong> {producto.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
