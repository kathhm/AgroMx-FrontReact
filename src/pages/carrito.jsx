import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  // Recalcular total y cantidad total cuando el carrito cambia
  useEffect(() => {
    const nuevoTotal = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    const nuevaCantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    setTotal(nuevoTotal);
    setCountProducts(nuevaCantidadTotal);
  }, [carrito]);
  
  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // Modificar la cantidad de un producto
  const actualizarCantidad = (id, cambio) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad + cambio) } : item
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, total, countProducts, agregarAlCarrito, eliminarProducto, actualizarCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
