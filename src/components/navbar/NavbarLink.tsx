import { Link } from "react-router-dom"


interface NavbarLink {
icon: string;
text: string;
path: string;
cssPropImg?: string;
cssPropDiv?: string;
cssPropText?: string;
clickEvent: React.MouseEventHandler<HTMLAnchorElement>
}
const NavbarLink = ({icon, text, path, clickEvent,cssPropImg,cssPropDiv,cssPropText}: NavbarLink) => {
  return (
    <Link onClick={clickEvent} to={path} className={`flex justify-between w-full px-6 items-center cursor-pointer p-3  hover:bg-dark/10 rounded-lg transition-all duration-300 gap-4 ${cssPropDiv}`}>
    <img src={icon} alt={text} className={` bg-dark rounded-lg ${cssPropImg}`} />
    <h2 className={` font-[500] text-left ${cssPropText}`}>{text}</h2>
    </Link>
  )
}

export default NavbarLink