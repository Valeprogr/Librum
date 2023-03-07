import { Link } from "react-router-dom"
import FormButton from "../components/buttons/FormButton"
import FormInput from "../components/form/FormInput"

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)] w-full">
    <div className="flex flex-col items-center py-[24px]  w-[342px]  bg-card shadow-lg rounded-lg">
    <h2 className="text-3xl font-bold text-center">Hello Again!</h2>
    <p className="pt-2 text-dark/70 text-sm">Welcome back to your happy place.</p>
    <form className="w-full px-[42px]  ">
     <FormInput placeholder="Yana Doe" label="Email" type="email"/> 
     <FormInput placeholder="********" label="Password" type="password"/> 
     <div className="w-full flex justify-between px-1">
     <Link className="pt-3 text-blue-500 underline text-sm" to='/register'>New User?</Link>
     <Link className="pt-3 text-blue-500 underline text-sm" to='/'>Forgotten your Password?</Link>

     </div>
    </form>
    <div className="flex w-full px-[42px]">
    <FormButton>Login</FormButton>
    </div>
    </div>
    </div>
  )
}

export default LoginPage