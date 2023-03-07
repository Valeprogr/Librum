import { Link } from 'react-router-dom'
import NavbarDownLink from './NavbarDownLink'

const DownLgNavbar = () => {
  return (
    <div className='md:flex items-center justify-start hidden  bg-card w-full shadow-lg border-t-gray-500/20 border-t-[1px]'>
    <div className="flex justify-start gap-4  mx-auto   max-w-[1300px] items-center px-20 py-2 w-full">
    <NavbarDownLink path='/about'>About</NavbarDownLink>
    <NavbarDownLink path='/'>Location</NavbarDownLink>
    <NavbarDownLink path='/book-list'>Books</NavbarDownLink>

    </div>
    </div>
  )
}

export default DownLgNavbar