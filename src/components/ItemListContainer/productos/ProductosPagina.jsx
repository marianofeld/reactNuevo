import { useState, useEffect } from "react"
import { promesaFuncion } from "./promesaFuncion"
import { RenderizadoDeProductos } from "./RenderizadoDeProductos"
import { useParams } from "react-router-dom"







const ProductosPagina = () => {
    const [productos, setProductos] = useState([])

    const { tipoArma } = useParams()

    console.log(tipoArma)

    useEffect(() => {

        promesaFuncion()
            .then((data) => {
                const filtrosDeProductos = tipoArma
                    ? data.filter(producto => producto.tipo === tipoArma)
                    : data
                setProductos(filtrosDeProductos)
                console.log(filtrosDeProductos)
            })
    }, [tipoArma])

    return (
        <>
            <RenderizadoDeProductos productos={productos} />
        </>
    )
}



export default ProductosPagina