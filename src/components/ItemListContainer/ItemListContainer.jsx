import ProductosPagina from './productos/ProductosPagina'
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
    const {tipoArma} = useParams()
    console.log(tipoArma)
    return (
        
        <article className='flex'>

            <section className='flex flex-wrap gap-4 px-6 py-11'>
                <ProductosPagina />
            </section>

        </article>

    )
}













export default ItemListContainer