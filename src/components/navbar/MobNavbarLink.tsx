import { Link } from "react-router-dom"


interface MobLink {
icon: string,
text: string,
path: string,
clickEvent: React.MouseEventHandler<HTMLAnchorElement>
}
const MobNavbarLink = ({icon, text, path, clickEvent}: MobLink) => {
  return (
    <Link onClick={clickEvent} to={path} className='flex justify-between w-full px-6 items-center cursor-pointer p-3  hover:bg-dark/10 rounded-lg transition-all duration-300'>
    <img src={icon} alt={text} className='w-10 p-2 bg-dark rounded-lg' />
    <h2 className="text-lg font-[500] text-left">{text}</h2>
    </Link>
  )
}

export default MobNavbarLink