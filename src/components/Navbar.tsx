import {  useState  } from 'react'
import { Link } from "react-router-dom"
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

import CTAButton from "./CTAButton"
import LgDownNavbar from './navbar/LgDownNavbar'
import NavbarLink from './navbar/NavbarLink'
import Sidebar from './navbar/Sidebar'

const Navbar = () => {
const [userOpen, setUserOpen] = useState(false)
const [burgerOpen,setBurgerOpen] = useState(false)
const userCloseHandler = () => {
  setUserOpen(false)
}
const burgerCloseHandler = () => {
  setBurgerOpen(false)
}

  return (
    <div className="bg-card shadow-md">
      <div className=" max-w-[1300px] mx-auto p-1 flex items-center justify-between px-6 md:px-20 relative">
        {/**title */}
        <Link to ='/' className="text-2xl lg:text-3xl tracking-wider font-bold cursor-pointer p-2  hover:bg-dark/10 rounded-lg transition-all duration-300 ">Librum</Link>
        {/* Menu mob*/}
        <button className="flex md:hidden p-2 hover:bg-dark/10 rounded-lg transition-all duration-300" onClick={() => setBurgerOpen(true)}><FiMenu className="text-4xl  " /></button>
        {
          burgerOpen && <Sidebar  closeEvent={burgerCloseHandler} />
        }
        {/* Menu pc*/}
        <div className="hidden md:flex items-center justify-center gap-4 relative ">
        <Link to='/cart' className="text-lg font-[500] px-3  cursor-pointer p-[6px]  hover:bg-dark/10 rounded-lg transition-all duration-300 relative">Cart <span className='absolute flex items-center justify-center font-bold bg-red-500 w-4 h-4 rounded-full text-[12px] top-5 left-11'>3</span></Link>
        <Link to='/login' className="text-lg font-[500] px-3   cursor-pointer p-[6px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Login</Link>
        <Link to='/sign-up'><CTAButton  >Sign up</CTAButton></Link>
        <CTAButton clickEvent={() => setUserOpen(!userOpen)} cssProps="flex items-center justify-center px-6" ><img src='../icons/login.svg' alt='user profile' /><img src='../icons/arrowDown.svg' alt='arrow' className={userOpen ? `rotate-90 transition-all duration-300` : ''} /></CTAButton>
        {
          userOpen && (
            <div className='absolute bg-card shadow-md top-12 right-0 p-4 rounded-lg transition-all duration-300'>
            <NavbarLink clickEvent={userCloseHandler} path='/create-product' text='Create Product' icon='../icons/createProduct.svg' />
            <NavbarLink clickEvent={userCloseHandler} path='/admin-order' text='Admin Orders' icon='../icons/adminOrders.svg' />
            <NavbarLink clickEvent={userCloseHandler} path='/edit-profle' text='Edit Profil' icon='../icons/editProfil.svg' />
            <NavbarLink clickEvent={userCloseHandler} path='/orders' text='Orders' icon='../icons/orders.svg' />

            </div>
          )
        }
        </div>
        </div>  
        {/* Menu down*/}
      <LgDownNavbar />
        </div>
  )
}

export default Navbar