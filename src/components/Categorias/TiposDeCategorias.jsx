
import { Link } from "react-router-dom"
import { listadoDeProductos } from "../ItemListContainer/productos/listadoDeProductos"


export const TiposDeCategorias = () => {

    return (
        <>
            <Link to="/armas/:tipoArma">
                Pistolas
            </Link>
            <Link to="/armas/:tipoArma">
                Subfusil
            </Link>
            <Link to="/armas/:tipoArma">
                Rifles
            </Link>

        </>
    )
}

// listadoDeProductos.map(
//     (cada)=>

//     <div>
//         <p>{cada.tipo}</p>
//     </div>



// )






export default TiposDeCategorias