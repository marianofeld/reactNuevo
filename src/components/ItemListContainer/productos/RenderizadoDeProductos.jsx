export const RenderizadoDeProductos = ({ productos }) => {
    return (
       
        productos.map((producto) =>
         
                                    
            <div key={producto.id} className="w-44 h-60 border-black border-2 border-solid">
              <img className="card-img-top w-72 h-32 bg-white object-contain" src={producto.img} alt="Card image cap" />
                <div className="card-body flex-col">
                    <h5 className="card-title text-xl font-bold ml-1">{producto.nombre}</h5>
                    <p className="card-text text-3xl ml-1">{producto.valor}</p>
                    <a href="#" className="btn btn-primary ml-1">Buy</a>
                </div>
            </div>
            )
        )}