import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    console.log("anda")
    return (
    < header className="bg-blue-800 flex justify-between h-20 items-center" >
        <div >
            <a className='flex items-center' href="index.html"><img className='h-16 ml-4 rounded-full' src="./icono.webp" alt="LOGO" /></a>
        </div>
        <nav className='flex items-center'>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline'>Nosotros</a>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline'>Productos</a>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline' ><CartWidget /></a>
        </nav>
    </header >
)
}


export default Navbar