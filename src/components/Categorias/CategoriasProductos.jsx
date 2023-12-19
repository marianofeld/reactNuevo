import TiposDeCategorias from "./TiposDeCategorias"


export const CategoriasProductos = () => {

    return (
        <article className="ml-9">
            <h2 className="my-8 text-5xl text-orange-600 font-extrabold roboto ">Categorias</h2>
            <section className="flex flex-col text-3xl font-black  text-orange-600 roboto" >

                <TiposDeCategorias />
            </section>
        </article>

    )
}

export default CategoriasProductos