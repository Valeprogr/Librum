import './buttonCTA.css'

interface ButtonCTA {
    children: React.ReactNode
    to?: string 
    }
const ButtonCTA = ({children,to}: ButtonCTA) => {
  return (
    <button className='button hover'>{children}</button>
  )
}

export default ButtonCTA