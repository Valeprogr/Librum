import './buttonCTA.css'

interface ButtonIconDouble {
    children:  React.ReactNode
}

const ButtonIconDouble = ({children}: ButtonIconDouble) => {
  return (
    <button className="w-full hover relative p-[9px] flex cursor-pointer">{children}</button>
  )
}

export default ButtonIconDouble