import { Link } from "react-router-dom"
import FormButton from "../components/buttons/FormButton"
import FormInput from "../components/form/FormInput"

const RegistePage = () => {
  return (
    <div className="flex justify-center items-center pt-[24px]">
    <div className="flex flex-col items-center py-[24px]  w-[342px]  bg-card shadow-lg rounded-lg">
  <h2 className="text-3xl font-bold text-center">Nice to meet u!</h2>
  <p className="pt-2 text-dark/70 text-sm">Welcome to your happy place.</p>
  <form className="w-full px-[42px]  ">
   <FormInput placeholder="yana@gmail.com" label="Email" type="email"/> 
   <FormInput placeholder="Yana Doe" label="Full Name" type="text"/> 
   <FormInput placeholder="********" label="Password" type="password"/> 
   <FormInput placeholder="********" label="Repeat Password" type="password"/> 
   <div className="w-full flex justify-end px-1">
   <Link className="pt-3 text-blue-500 underline text-sm" to='/login'>Do you have an account?</Link>
   </div>
  </form>
  <div className="flex w-full px-[42px]">
  <FormButton>Login</FormButton>
  </div>

    </div>
  </div>
  )
}

export default RegistePage