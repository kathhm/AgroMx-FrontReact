import { createContext, useState } from "react";

// Crear el contexto
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
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
