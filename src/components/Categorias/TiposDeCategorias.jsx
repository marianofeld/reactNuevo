
import { Link } from "react-router-dom"



export const TiposDeCategorias = () => {

    return (
        <>
            <Link className="py-3" to="/armas/pistola">
                Pistolas
            </Link >
            <Link className="py-3" to="/armas/subfusil">
                Subfusil
            </Link>
            <Link className="py-3" to="/armas/rifle">
                Rifles
            </Link>
            <Link className="py-3" to="/">
                Todas
            </Link>

        </>
    )
}


export default TiposDeCategorias