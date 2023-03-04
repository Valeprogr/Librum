import { Rotate as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const MobNavbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="flex md:hidden justify-between items-center bg-mainColor  w-full h-[60px] px-4 relative shadow-lg">
      <h2 className='text-2xl tracking-wider font-bold text-text'>Librum</h2>
    <button onClick={() => setOpen(!open)}><Hamburger duration={0.8} rounded color='#242829'  /></button>  
    {
      open && (
        <div className='absolute flex items-center justify-between flex-col  top-[60px] right-0 w-[160px] animation_right  border-l-gray-600  border-l-[1px]  h-[calc(100vh-60px)] bg-mainColor opacity_half py-10 shadow-lg'>

        <div className='flex flex-col  gap-2 text-left'>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Home</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>About</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Contacts</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Books</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Categories</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Login</Link>
        <Link className='text-text text-[18px] font-[500] hover:text-gray-300 transition all duration-300' to='/'>Register</Link>
        </div>

        <div className='flex gap-2'>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsGithub />
        </div>
        </div>
      )
    }
    </div>
  )
}

export default MobNavbar