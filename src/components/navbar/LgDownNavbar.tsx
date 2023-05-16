import { Link } from "react-router-dom"

const LgDownNavbar = () => {
  return (
    <div className='md:flex items-center justify-start hidden  bg-card w-full shadow-lg border-t-gray-500/20 border-t-[1px] '>
    <div className="flex justify-start gap-4  mx-auto   max-w-[1300px] items-center px-20 py-1 w-full">
    <Link to='/' className="text-base font-[500] px-3   cursor-pointer p-[4px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Home</Link>
    <Link to='/books' className="text-base font-[500] px-3   cursor-pointer p-[4px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Books</Link>
    <Link to='/location' className="text-base font-[500] px-3   cursor-pointer p-[4px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Location</Link>
    <Link to='/about' className="text-base font-[500] px-3   cursor-pointer p-[4px]  hover:bg-dark/10 rounded-lg transition-all duration-300">About</Link>
    </div>
    </div>  )
}

export default LgDownNavbar