import { Link } from "react-router-dom"

export const RenderizadoDeProductos = ({ productos }) => {
    return (

        productos.map((producto) =>

            <div key={producto.id} className="w-80 h-70 m-2 border-black border-2 border-solid shadow-xl shadow-orange-300">
                <img className="p-2 card-img-top w-100% h-32 bg-white object-contain" src={producto.img} alt="Card image cap" />
                <div className="card-body flex justify-between p-2 ">
                    <div className="flex flex-col  ">
                        <h5 className="card-title text-3xl font-bold ml-1">{producto.nombre}</h5>
                        <p className="card-text text-3xl ml-1">${producto.valor}</p>
                    </div>
                    <Link className="flex justify-center items-center btn btn-primary ml-1" to={`/armasID/${producto.id}`}>
                        <p class="text-xl">Ver mas</p>
                    </Link>

                </div>
            </div>
        )
    )
}