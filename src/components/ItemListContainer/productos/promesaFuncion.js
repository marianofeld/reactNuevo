import { listadoDeProductos } from "./listadoDeProductos"

export const promesaFuncion = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listadoDeProductos)
        }, 200)
    })
}   