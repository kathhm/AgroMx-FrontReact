import React from "react";

const DetallesProducto = () => {
  // const [cantidad, setCantidad] = useState(1);

  // const aumentarContador = () => {
  //   setCantidad(cantidad + 1);

  // };

  return (
    <div className="container mt-5 d-flex justify-content-center">

      <div className="row d-flex justify-content-center ">

        <div className="col-md-3 sm-2 ">
          <h2>Manzana Gala</h2>
          <img src="https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg" alt="Manzana Gala" />
        </div>
        <div className="col-md-4">
          <h3> $11.00</h3>
          <p>
            Cosechada localmente por “Manzanas, La Conchita”. Fuente de fibra, vitamina C y E. Contiene antioxidantes y polifenoles.
            Una manzana equivale a 2/3 de la porción mínima diaria recomendada de fruta.

          </p></div></div>
    </div>
  );

};
export default DetallesProducto;