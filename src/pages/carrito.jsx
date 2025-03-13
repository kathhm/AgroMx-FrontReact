import { createContext, useState } from "react";

// Crear el contexto
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
  
    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  
    setCountProducts(countProducts + 1);
    setTotal(total + producto.precio);
  };

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, total, countProducts, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
