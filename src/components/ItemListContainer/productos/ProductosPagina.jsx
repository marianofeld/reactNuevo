import { useState, useEffect } from "react"
import { promesaFuncion } from "./promesaFuncion"
import { RenderizadoDeProductos } from "./RenderizadoDeProductos"
import { useParams } from "react-router-dom"




const ProductosPagina = () => {
    const [productos, setProductos] = useState([])

    const {tipoArma} = useParams()
    console.log(tipoArma)
    useEffect(() => {
        promesaFuncion()
            .then((data) => {
                // const filtrosDeProductos = 
                console.log(productos)
                setProductos(data)
            }, [])
    })

    return (
        <>
            <RenderizadoDeProductos productos={productos} />
        </>
    )
}



export default ProductosPagina