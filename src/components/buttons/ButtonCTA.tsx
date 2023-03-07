import './buttonCTA.css'

interface ButtonCTA {
    children: React.ReactNode

    }
const ButtonCTA = ({children}: ButtonCTA) => {
  return (
    <button className='button cursor-pointer hover'>{children}</button>
  )
}

export default ButtonCTA