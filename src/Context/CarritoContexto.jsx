import { createContext, useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"

export const CarritoContexto = createContext()

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem("carrito"));
    if (storedCarrito) {
      setCarrito(storedCarrito);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const cantidadDeArmas = () => {
    return carrito.reduce((iterador, arma) => arma.cantidad + iterador, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((iterador, arma) => (arma.cantidad * arma.valor) + iterador, 0)
  }

  const removeArma = (id) => {
    setCarrito(carrito.filter(arma => arma.id !== id))
  }

  const agregarAlCarrito = (arma) => {
    const armaBuscada = carrito.find(item => item.id == arma.id)

    if (armaBuscada) {
      armaBuscada.cantidad = armaBuscada.cantidad + arma.cantidad
      setCarrito([...carrito])
      toast.success("¡Añadiste la misma arma al carrito!", { autoClose: 3000, position: "top-right" })
    } else {
      setCarrito([...carrito, arma])
      toast.success("¡Arma añadido al carrito!", { autoClose: 3000, position: "top-right" })

    }
  }


  return (
    <CarritoContexto.Provider value={{
      carrito,
      vaciarCarrito,
      agregarAlCarrito,
      cantidadDeArmas,
      precioTotal,
      removeArma
    }}>
      {children}
      <ToastContainer />
    </CarritoContexto.Provider>

  )
}

export default CarritoContexto