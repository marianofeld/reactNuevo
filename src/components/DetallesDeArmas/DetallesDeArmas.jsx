import { useEffect, useState} from "react";
import { promesaFuncion } from "../ItemListContainer/productos/promesaFuncion";
import { useParams } from "react-router-dom";

export const DetallesDeArmas = () => {

    const [arma, setArma] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const { idArma } = useParams()

    

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    // porque no me anda el .stock!!!!!!!!!!

    const disminuirCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const addToCart = () => {
        const armaEnElCarro = {
            ...arma,
            cantidad
        }
        console.log(armaEnElCarro)


    }
   

    useEffect(() => {

        promesaFuncion()
            .then((data) => {
                setArma(data.filter(arma => arma.id === Number(idArma)
                )
                )
            })
    }, [])

    return (

        <>

            {arma.map(arma1 =>


                <div className="flex p-4 items-center justify-center m-40 bg-white" key={arma1.id}>
                    <img className="imagenDetalle " src={arma1.img} alt={arma1.nombre} />
                    <div className="px-4">
                        <div className="flex flex-col ">
                            <h1 className="text-5xl roboto">{arma1.nombre} </h1>
                            <p className="text-5xl roboto py-4">${arma1.valor}</p>

                        </div>
                        <div>
                            <p className="text-2xl roboto py-4">{arma1.descripcion}</p>
                            <div className="flex items-center py-12">
                                <button onClick={disminuirCantidad} className="bg-gray-800 text-3xl hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">-</button>
                                <span className="px-4 text-2xl">{cantidad}</span>
                                <button onClick={aumentarCantidad} className="bg-gray-800 text-3xl hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">+</button>
                            </div>
                            <button onClick={addToCart} className="bg-gray-800 text-5xl roboto hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">BUY</button>
                        </div>
                    </div>
                </div>



            )}

        </>
    )
}       
