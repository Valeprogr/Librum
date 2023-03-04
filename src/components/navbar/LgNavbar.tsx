import { Link } from "react-router-dom"

import ButtonCTA from "../buttons/ButtonCTA"
import ButtonIconDouble from "../buttons/ButtonIconDouble"

const LgNavbar = () => {
  return (
    <div className="md:flex hidden  bg-card w-full shadow-lg ">

      <div className="flex justify-between  mx-auto   max-w-[1300px] items-center px-20 py-[10px] w-full">
      <Link  to='/' className='text-3xl tracking-wider font-bold cursor-pointer p-1 px-4 hover:bg-dark/10 rounded-lg transition-all duration-300'>Librum</Link>
      <div className="flex items-center justify-center gap-4 ">
        <Link to='/login' className="text-lg font-[500] px-3 -mr-1  cursor-pointer p-[6px]  hover:bg-dark/10 rounded-lg transition-all duration-300">Login</Link>
        <Link to='/sign-up'><ButtonCTA to='/sign-up'>Sign up</ButtonCTA></Link>
        <ButtonIconDouble><img src='../login.svg' alt="user" className="w-[22px]" /> <img src='../arrowDown.svg' alt='arrow' className="w-[22px]" /></ButtonIconDouble>
      </div>
      </div>
    </div>
    

  )
}

export default LgNavbar