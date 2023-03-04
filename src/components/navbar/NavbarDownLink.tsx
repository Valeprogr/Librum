import { Link } from 'react-router-dom'

interface NavbarDownLink{
    path: string,
    children: React.ReactNode
}

const NavbarDownLink = ({children,path}: NavbarDownLink) => {
  return (
    <Link  to={path} className='cursor-pointer p-1 px-3  hover:bg-dark/10 rounded-lg transition-all duration-300 font-[500] ' >{children}</Link>
  )
}

export default NavbarDownLink