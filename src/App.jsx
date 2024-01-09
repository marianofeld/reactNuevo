import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { DetallesDeArmas } from "./components/DetallesDeArmas/DetallesDeArmas"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState} from "react"
import CarritoContexto from './context/CarritoContexto'
import CarritoWeb from './components/Carrito/CarritoWeb'




function App() {

  const [carrito, setCarrito] = useState([])

    
  // FIND

  const agregarAlCarrito = (arma) => {
    const armaBuscada = carrito.find(item => item.id == arma.id)
    
    if (armaBuscada) {
      armaBuscada.cantidad = armaBuscada.cantidad + arma.cantidad
      setCarrito([...carrito])
      console.log("2 veces"+JSON.stringify(carrito) )
    } else {
      console.log("HOLAAA"+carrito)
      setCarrito([...carrito,arma])
      
      
      
    }
  }

  return (

    <CarritoContexto.Provider value={{ agregarAlCarrito, carrito }}>

      <BrowserRouter >

        <Navbar />

        <img src='../bannercs.webp' alt="Banner Counter" className="w-full object-cover" />
        <article className='flex bg-slate-200 w-full'>
          <section className="bg-slate-200 w-full " >

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/armas/:tipoArma" element={<ItemListContainer />} />
              <Route path="/armasID/:idArma" element={<DetallesDeArmas />} />
              <Route path="*" element={<ItemListContainer />} />
              <Route path="/carrito" element={<CarritoWeb />} />

            </Routes>

          </section>

        </article>

      </BrowserRouter>

    </CarritoContexto.Provider>
  )
}

export default App
