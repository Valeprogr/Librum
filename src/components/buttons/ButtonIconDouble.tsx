import './buttonCTA.css'

interface ButtonIconDouble {
    children:  React.ReactNode
}

const ButtonIconDouble = ({children}: ButtonIconDouble) => {
  return (
    <button className="hover relative p-[9px] flex">{children}</button>
  )
}

export default ButtonIconDouble