import CarritoContexto from "../../context/CarritoContexto"
import { useContext } from "react";





export const CarritoWeb = () => {
    const { carrito } = useContext(CarritoContexto)


    return (
        <div className="bg-gray-100 p-8 w-full">
            <h1 className="text-6xl roboto font-bold mb-4">Tu Carrito de Compras</h1>
            <hr />
            {carrito.map((armCar) => (
                <div key={armCar.id} className="flex items-center border-b w-full border-gray-300 py-4">
                    <img
                        src={armCar.img}
                        alt={armCar.nombre}
                        className="rounded-full border-solid h-48 w-48 object-contain ml-10"
                    />
                    <div className="flex justify-evenly w-full mx-10">
                        <h2 className="text-gray-600 text-5xl roboto font-bold">{armCar.nombre}</h2>
                        <div className="flex flex-col">
                            <p className="text-gray-600 text-4xl roboto font-bold">Precio por unidad:{armCar.valor}</p>
                            <p className="text-gray-600 text-4xl roboto font-bold">Cantidad: {armCar.cantidad}</p>
                        </div>
                        <h3 className="text-gray-600 text-4xl roboto font-bold">Precio total: {armCar.valor*armCar.cantidad} </h3>
                    </div>

                </div>

            ))}
            <hr />
            <button className="bg-gray-800 text-5xl roboto hover:bg-gray-700 text-white font-bold py-4 my-4 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded ">TERMINAR COMPRA</button>
        </div>
    );
};
export default CarritoWeb;

