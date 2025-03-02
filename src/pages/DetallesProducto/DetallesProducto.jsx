import {useState } from "react";
import "./DetallesProductos.css";
useState
// const App = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('/public/json/data2.json')
//       .then(response => response.json())
//       .then(data => setUsers(data.users));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.nombre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;

const DetallesProducto = () => {
  // const [cantidad, setCantidad] = useState(1);

  // const aumentarContador = () => {
  //   setCantidad(cantidad + 1);

  // };
return (
  <>
      <div className="container col-12 mt-5">
        <div>
      <h2 class="text-start">Manzana Gala</h2>
      </div>
        <div className="row justify-content-center ">
          <div className="col-md-5 sm-2 px-10">
            <img class="img-fluid" src="//mercadoacasa.mx/cdn/shop/products/2502808-00-CH515Wx515H_7ddf79a2-30aa-4d06-829f-b896173133a0_grande.jpg?v=1588641604" alt="Manzana Gala" />
          </div>
          <div className="col-md-4">
            <div><h3> $11.00</h3></div>
            <div><p>
              Cosechada localmente por “Manzanas, La Conchita”. Fuente de fibra, vitamina C y E. Contiene antioxidantes y polifenoles.
              Una manzana equivale a 2/3 de la porción mínima diaria recomendada de fruta.

            </p>
            </div>
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
              La manzana es una fruta rica en nutrientes. Fuente de fibra, vitamina C, E, K, potasio, cobre,
              además contiene antioxidantes y polifenoles.
            </p>
          </div>
        </div>

        <div id="contenedor2" className="p-3 mt-3 bg-opacity-25 border detallesProducto rounded">
          <h4 id="text2" data-bs-toggle="collapse" data-bs-target="#contenidoProduccion" aria-expanded="false" aria-controls="contenidoProduccion" style={{ cursor: "pointer" }}>
            Más información sobre su producción
          </h4>
          <div className="collapse" id="contenidoProduccion">
            <p>Producida en la Ciudad de México por la productora familiar {'"Manzanas, La Conchita"'}.</p>
            <ul>
              <li><strong>Sistema de captación de agua:</strong> Riego con agua captada de lluvia.</li>
              <li><strong>Lombricomposta:</strong> Nutre el suelo y mejora su productividad.</li>
            </ul>
          </div>
        </div>
      </div>
    </>



  );

};
export default DetallesProducto;