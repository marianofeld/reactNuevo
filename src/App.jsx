import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { DetallesDeArmas } from "./components/DetallesDeArmas/DetallesDeArmas"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import CarritoContexto from './context/CarritoContexto'




function App() {

  const [carrito, setCarrito] = useState([])
  
  let posicionBuscada = carrito.findIndex(item => item.id === carrito.id)

  
  const agregarAlCarrito = (arma) => {
    if (posicionBuscada  != -1) {
            
            setCarrito([...carrito,{...arma}, carrito[posicionBuscada].cantidad= arma.cantidad + carrito[posicionBuscada].cantidad])
           console.log(carrito)
            
    } else {
      
      setCarrito([...carrito,arma])
      console.log(JSON.stringify(carrito))
      
    }
  }
    return (

      <CarritoContexto.Provider value={{ agregarAlCarrito, carrito }}>

        <BrowserRouter >

          <Navbar />

          <img src='../bannercs.webp' alt="Banner Counter" class="w-full object-cover" />
          <article className='flex bg-slate-200'>
            <section className="bg-slate-200" >

              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/armas/:tipoArma" element={<ItemListContainer />} />
                <Route path="/armasID/:idArma" element={<DetallesDeArmas />} />
                <Route path="*" element={<ItemListContainer />} />
              </Routes>

            </section>

          </article>

        </BrowserRouter>

      </CarritoContexto.Provider>
    )
  }

  export default App
