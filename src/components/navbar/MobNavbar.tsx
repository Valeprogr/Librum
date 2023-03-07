import { Rotate as Hamburger } from 'hamburger-react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MobNavbarLink from './MobNavbarLink'
import SocialNetworkComponent from './SocialNetworkComponent'


const MobNavbar = () => {
  const [open,setOpen] = useState(false)
  const elementRef = useRef<HTMLInputElement>()
  const navbarRef = useRef<HTMLInputElement>()

  const sidebarCloseHandler = () => {
    setOpen(false)
  }


  useEffect(() => {
    const handler = (e: any) => {
      if(!navbarRef.current?.contains(e.target)) {
        setOpen(!open)
      }
      if(!elementRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler)
  }
  }, [open])



  return (
    <div className="flex md:hidden justify-between items-center bg-card  w-full h-[60px] px-4 py-2  shadow-lg ">
      <Link onClick={sidebarCloseHandler} to='/' className='text-2xl tracking-wider font-bold cursor-pointer p-2 px-4 hover:bg-dark/10 rounded-lg transition-all duration-300'>Librum</Link>
    <button ref={navbarRef as any} className='cursor-pointer  hover:bg-dark/10 rounded-lg transition-all duration-300' onClick={() => setOpen(!open)}><Hamburger toggled={open} toggle={setOpen} duration={0.8} rounded color='#282C35'/></button>  
    {
      open && (
        <div ref={elementRef as any} className='absolute flex items-center justify-between flex-col  top-[60px] right-0 w-[240px]  animation_right bg-card h-max-[calc(100vh-60px)] h-[calc(100vh-60px)] shadow-lg  px-5 py-8 '>
          <div className='flex flex-col w-full pb-4 z-20'>
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/' icon='../home.svg' text='Home' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/about' icon='../about.svg' text='About' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/' icon='../location.svg' text='Location' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/book-list' icon='../book.svg' text='Books' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/' icon='../categories.svg' text='Categories' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/login' icon='../login.svg' text='Login' />
          <MobNavbarLink clickEvent={sidebarCloseHandler} path='/register' icon='../register.svg' text='Sign up' />
          </div>

        <SocialNetworkComponent />
      
        </div>
      )
    }
    </div>
  )
}


export default MobNavbar