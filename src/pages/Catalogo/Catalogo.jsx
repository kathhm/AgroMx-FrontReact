import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./catalogo.module.css";
import ProductList from "./ProductList";
import { CarritoContext } from "../CarritoContexto";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const navigate = useNavigate();
  /*const [carrito, setCarrito] = useState([]);*/
  const {agregarAlCarrito} = useContext(CarritoContext);
  /*const [cantidadCarrito, setCantidadCarrito] = useState(0);*/

/*
  useEffect(() => {
    const data = localStorage.getItem("productos");
    if (data && JSON.parse(data).length > 0) {
      setProductos(JSON.parse(data));
    } else {
      fetch(`/data/data2.json`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
          })
          .then((data) => {
            setProductos(data);
            localStorage.setItem("productos", JSON.stringify(data));
          })
          .catch((error) => console.error("Error cargando el JSON:", error));
    }
  }, []);
*/

  useEffect(() => {
    fetch("http://localhost:8080/products/all")
    .then(res => {
      if(res.status !== 200) {
        throw new Error("Error al hacer la peticion")
      }
      return res.json();
    }).then(products => {
      setProductos(products);
    }).catch(() => console.log("Error al hacer la peticion la servidor"));
  }, []);


  /*useEffect(() => {
    if (productos.length > 0) {
      //cuando elimina vuelve a guardar
      localStorage.setItem("productos", JSON.stringify(productos));
    }
  }, [productos]);*/

  const verDetalles = (id) => {
    navigate(`/producto/${id}`);
  };

  /*const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };*/

  /*const eliminarTodos = () => {
    setProductos([]);
  };*/

  /*const modificarProducto = (productoModificado) => {
    setProductos(
      productos.map((p) => (p.id === productoModificado.id ? productoModificado : p))
    );
  };*/

  const categorias = ["Todas", "Frutas", "Verduras", "Legumbres", "Conservas", "Composta"];

  const productosFiltrados = categoriaSeleccionada === "Todas"
    ? productos
    : productos.filter((producto) => producto.categoryId.categoryName === categoriaSeleccionada);

  return (
    <div className="container my-5 text-center">
      <h1>Catálogo de Productos</h1>
      
      <div className="d-flex justify-content-center mb-4">
        <div className="filtros">
          <h3>Filtrar</h3>
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`btn ${categoriaSeleccionada === categoria ? 'btn-success' : 'btn-outline-success'} m-1`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <ProductList
        productos={productosFiltrados}
        agregarAlCarrito={agregarAlCarrito}
       /* eliminarProducto={eliminarProducto}
        modificarProducto={modificarProducto}*/
        verDetalles={verDetalles}
      />
     </div>
  );
};

export default Catalogo;
