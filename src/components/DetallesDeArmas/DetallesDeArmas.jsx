import { useEffect, useState } from "react";
import { promesaFuncion } from "../ItemListContainer/productos/promesaFuncion";

import { useParams } from "react-router-dom";

export const DetallesDeArmas = () => {

    const [arma, setArma] = useState([])

    const { idArma } = useParams()


    console.log(arma)

    useEffect(() => {

        promesaFuncion()
            .then((data) => {
                setArma(data.filter(arma => arma.id === Number(idArma)))

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
                            <p className="text-5xl roboto">${arma1.valor}</p>
                            
                        </div>
                        <div>
                            <p className="text-2xl roboto">{arma1.descripcion}</p>
                            <button className="btn btn-primary text-5xl roboto text-orange-400 w-40 h-16">BUY</button>
                        </div>
                    </div>
                </div>



            )}

        </>
    )
}       
