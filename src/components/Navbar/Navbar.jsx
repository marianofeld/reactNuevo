import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

    return (
        < header className="bg-gray-800  flex justify-between h-24 items-center text-white" >
            <div >
                <a className='flex items-center' href="index.html"><img className='h-20 ml-4 rounded-full' src="../icono.webp" alt="LOGO" /></a>
            </div>
            <nav className='flex items-center'>
                <Link to="/" className='hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline'>Nosotros</Link>

                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/pistola">Pistolas</Link >
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/subfusil">Subfusil</Link>
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/rifle">Rifles</Link>
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/">Todas</Link>

                <Link to="/" className='hover:text-gray-300 px-11 no-underline' ><CartWidget /></Link>
            </nav>
        </header >
    )
}


export default Navbar