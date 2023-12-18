import TiposDeCategorias from "./TiposDeCategorias"


export const CategoriasProductos = () => {

    return (
        <article className="ml-9">
            <h2 className="my-8 text-5xl">Categorias</h2>
            <section className="flex flex-col" >

                <TiposDeCategorias />
            </section>
        </article>

    )
}

export default CategoriasProductos