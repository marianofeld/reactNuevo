import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    console.log("anda")
    return (
        < header className="bg-blue-700 flex justify-between h-24 items-center" >
            <div >
                <a className='flex items-center' href="index.html"><img className='h-20 ml-4 rounded-full' src="../icono.webp" alt="LOGO" /></a>
            </div>
            <nav className='flex items-center'>
                <Link to="/" className='text-orange-600 text-4xl font-bold roboto  px-11 no-underline'>Nosotros</Link>
                <Link to="/" className='text-orange-600 text-4xl font-bold roboto px-11 no-underline'>Productos</Link>
                <Link to="/" className='text-orange-600  px-11 no-underline' ><CartWidget /></Link>
            </nav>
        </header >
    )
}


export default Navbar