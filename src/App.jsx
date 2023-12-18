import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CategoriasProductos from "./components/Categorias/CategoriasProductos"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <article className='flex'>
        <section>
          <CategoriasProductos />
        </section>
        <section >

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/pistolas" element={<ItemListContainer />} />
            <Route path="/subfusil" element={<ItemListContainer />} />
            <Route path="/rifles" element={<ItemListContainer />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>



        </section>



      </article>



    </BrowserRouter>
  )
}

export default App
