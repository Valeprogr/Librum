import { Link } from "react-router-dom"
import CTAButton from "../components/CTAButton"
import Input from "../components/Input"

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-96px)]">
    <div className="flex flex-col items-center py-[24px] md:py-[40px]  w-[342px]  bg-card shadow-lg rounded-lg md:w-[400px]">
    <h2 className="text-3xl font-bold text-center">Hello Again!</h2>
    <p className="pt-2 text-dark/70 text-sm">Welcome back to your happy place.</p>
    <form className="w-full px-[42px] md:px-[56px] ">
     <Input placeholder="Yana Doe" label="Email" type="email"/> 
     <Input placeholder="********" label="Password" type="password"/> 
     <div className="w-full flex justify-between p-1">
     <Link className="pt-3 text-blue-500 underline text-sm" to='/register'>New User?</Link>
     <Link className="pt-3 text-blue-500 underline text-sm" to='/'>Forgotten your Password?</Link>
     </div>
    <CTAButton cssProps="w-full mt-2 md:mt-4">Login</CTAButton>
    </form>
    
    </div>
    </div>
  )
}

export default LoginPage