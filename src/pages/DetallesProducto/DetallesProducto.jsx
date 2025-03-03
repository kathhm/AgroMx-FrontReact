import { useState } from "react";
import "./DetallesProductos.css";
useState
const DetallesProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const aumentarContador = () => setCantidad(cantidad + 1);
  const disminuirContador = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);



  return (
    <>
      <div className="container col-12 mt-5 d-flex justify-content-center">

        <div className="row d-flex justify-content-center ">

          <div className="col-md-3 sm-2 ">
            <h2>Manzana Gala</h2>
            <img src="https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg" alt="Manzana Gala" />

            <div className=" d-flex align-items-center mb-3">



              {/* <button>
                <i className="bi bi-dash-lg btn-warning" onClick={disminuirContador}></i>
              </button>
              <span className="mx-2">{cantidad}</span>
              <button>
                <i className="bi bi-plus-lg btn-warning" onClick={aumentarContador}></i>
              </button> */}
              <button className="btn contador mx-2" onClick={disminuirContador}>-</button>
              <span className="fs-5 cantidad">{cantidad}</span>
              <button className="btn contador mx-2 " onClick={aumentarContador}>+</button>
              <button className="btn agregar w-100">Agregar</button>

            </div>


          </div>
          <div className="col-md-4">
            <div><h3> $11.00</h3></div>
            <div><p>
              Cosechada localmente por “Manzanas, La Conchita”. Fuente de fibra, vitamina C y E. Contiene antioxidantes y polifenoles.
              Una manzana equivale a 2/3 de la porción mínima diaria recomendada de fruta.

            </p></div>
          </div>
        </div>
      </div>


      <div className=" col-12 mt-4 mb-5 my-4">
        <div id="contenedor1" className="p-3  border rounded detallesProducto">
          <h4 id="text1" data-bs-toggle="collapse" data-bs-target="#contenidoProducto" aria-expanded="false" aria-controls="contenidoProducto" style={{ cursor: "pointer" }}>
            ¿Por qué comprar este producto?
          </h4>
          <div className="collapse" id="contenidoProducto">
            <p>
              La manzana es una fruta rica en nutrientes. Fuente de fibra, vitamina C, E, K, potasio, cobre, además contiene antioxidantes y polifenoles.

            </p>
            <p>   Nuestra Manzana Gala está producida localmente por {"Manzanas, La Conchita"}, una productora familiar que cosecha sin agroquímicos, con técnicas sostenibles.

            </p>
            <p> Comprando apoyas a la economía local, la reducción de la contaminación y cuidas tu salud.</p>

          </div>
        </div>

        <div id="contenedor2" className="p-3 mt-3 bg-opacity-25 border detallesProducto rounded">
          <h4 id="text2" data-bs-toggle="collapse" data-bs-target="#contenidoProduccion" aria-expanded="false" aria-controls="contenidoProduccion" style={{ cursor: "pointer" }}>
            Más información sobre su producción
          </h4>
          <div className="collapse" id="contenidoProduccion">
            <p>Producida en la Ciudad de México por la productora familiar {'"Manzanas, La Conchita"'}.</p>
            <p>Para el cultivo y cosecha de esta manzana se utilizaron  técnicas agroecológicas como:
            </p>
            <ul>

              <li><strong>Sistema de captación de agua:</strong> Regada con un lluvia captada por medio de techos, con su respectivo sistema de riego por goteo.
              </li>
              <li><strong>Lombricomposta:</strong>Nutre y fertiliza el suelo haciéndolo más productivo y mitiga los daños por heladas y sequías, aumentando la respuesta a los fertilizantes.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>



  );

};
export default DetallesProducto;