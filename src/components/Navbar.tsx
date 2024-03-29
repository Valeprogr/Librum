import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FiMenu } from 'react-icons/fi'
import { useAuth0 } from "@auth0/auth0-react";
import CTAButton from "./CTAButton"
import LgDownNavbar from './navbar/LgDownNavbar'
import NavbarLink from './navbar/NavbarLink'
import Sidebar from './navbar/Sidebar'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { IUserData } from '../types/user.type';
import UserDataServices from "../services/UserService";
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const [userOpen, setUserOpen] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)
  const { cartQuantity } = useShoppingCart();
  const [data, setData] = useState<IUserData>({
    email: '',
    books: ''
});

  const { isAuthenticated, user } = useAuth0();
//console.log(user?.email)
 
const userMenuLinks = [
  {
    icon:'../icons/createProduct.svg',
    text: 'Create Product',
    path: "/create-product",
  },
  {
    icon: '../icons/orders.svg',
    text: 'User Books',
    path: '/user-books',
  },
  {
    icon: '../icons/editProfil.svg',
    text: 'Profile',
    path: '/profile',
  },
]
 
    

  useEffect(() => {
    if (isAuthenticated) {
      if (user) {
        setData({email: user.email as string})
        UserDataServices.create(data)
      }
    }
  }, [])
  const userCloseHandler = () => {
    setUserOpen(false)
  }
  const burgerCloseHandler = () => {
    setBurgerOpen(false)
  }
  useEffect(() => {
    if (burgerOpen === true) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [burgerOpen])

  return (
    <div className="bg-card w-auto">
      <div className=" max-w-[1300px] mx-auto p-1 flex items-center justify-between px-6 md:px-20 relative z-40">
        {/**title */}
        <Link to='/' className="text-2xl lg:text-3xl tracking-wider font-bold cursor-pointer p-2  hover:bg-dark/10 rounded-lg transition-all duration-300 ">Librum</Link>
        {/* Menu mob*/}
        
        <button className="flex md:hidden p-2 hover:bg-dark/10 rounded-lg transition-all duration-300" onClick={() => setBurgerOpen(true)}><FiMenu className="text-4xl  " /></button>
        {
          burgerOpen && <Sidebar closeEvent={burgerCloseHandler} />
        }
        {/* Menu pc*/}
        <div className="hidden md:flex items-center justify-center gap-4 relative ">

          {/* <Link to='/login' className="text-lg font-[500] px-3   cursor-pointer p-[6px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Login</Link>
        <Link to='/sign-up'><CTAButton  >Sign up</CTAButton></Link> */}
          {isAuthenticated ?
            <>
            
              <Link to='/cart' className="text-lg font-[500] px-3  cursor-pointer p-[6px]  hover:bg-dark/10 rounded-lg transition-all duration-300 relative">Cart{cartQuantity === 0 ? null :<span className='absolute flex items-center justify-center font-bold bg-red-500 w-4 h-4 rounded-full text-[12px] top-5 left-11'>{cartQuantity}</span> } </Link>
              <LogoutButton />
              </>
            :
            <LoginButton />
          }

          {
            isAuthenticated ?
              <>
            <CTAButton clickEvent={() => setUserOpen(!userOpen)} cssProps="flex items-center justify-center px-6" ><img src='../icons/login.svg' alt='user profile' /><img src='../icons/arrowDown.svg' alt='arrow' className={userOpen ? `rotate-90 transition-all duration-300` : ''} /></CTAButton>
            {
              userOpen && (
                <div className='absolute bg-card shadow-md top-12 right-0 p-4 rounded-lg transition-all duration-300 '>
                  {
                    userMenuLinks.map((link, index) => (
                      <Link to={link.path} key={index} className='flex  justify-left w-full px-6 items-center cursor-pointer p-3  hover:bg-dark/10 rounded-lg transition-all duration-300 gap-4 text-left' onClick={userCloseHandler}>
                        <img src={link.icon} alt={link.text} className='w-8 h-8 bg-dark p-2 rounded-lg' />
                        {link.text}
                      </Link>
                    ))
                  }
                  
                      
  
                </div>
              )
         
                }
                </>
          :
          null
            }
         
        </div>
      </div>
      {/* Menu down*/}
      <LgDownNavbar />
    </div>
  )
}

export default Navbar