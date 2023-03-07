import { Link } from "react-router-dom"
import CTAButton from "../components/CTAButton"
import Input from "../components/Input"

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center pt-[24px] md:pt-[32px]">
    <div className="flex flex-col items-center py-[24px] md:py-[32px]  w-[342px]  bg-card shadow-lg rounded-lg md:w-[400px]">
  <h2 className="text-3xl font-bold text-center">Nice to meet u!</h2>
  <p className="pt-2 text-dark/70 text-sm">Welcome to your happy place.</p>
  <form className="w-full px-[42px] md:px-[56px] ">
   <Input placeholder="yana@gmail.com" label="Email" type="email"/> 
   <Input placeholder="Yana Doe" label="Full Name" type="text"/> 
   <Input placeholder="********" label="Password" type="password"/> 
   <Input placeholder="********" label="Repeat Password" type="password"/> 
   <div className="w-full flex justify-end p-1">
   <Link className="pt-3 text-blue-500 underline text-sm" to='/login'>Do you have an account?</Link>
   </div>
   <CTAButton cssProps="mt-2 w-full">Register</CTAButton>
  </form>

    </div>
  </div>
  )
}

export default SignUpPage
