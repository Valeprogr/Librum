import { Link } from "react-router-dom"
import CTAButton from "../components/CTAButton"
import Input from "../components/Input"

const EditProfilePage = () => {
  return (
<div className="max-w-[1300px] mx-auto">
<h2 className="w-full max-w-[830px] text-center md:text-left mx-auto text-2xl md:text-3xl font-bold pt-6 pb-2">Edit Profile</h2>
<div className="flex flex-col justify-start items-center gap-4 pt-2 lg:flex-row lg:justify-center lg:items-start lg:gap-12">
    <div className="flex flex-col items-center py-[24px] md:py-[32px]  w-[342px]  bg-card shadow-lg rounded-lg md:w-[400px]">
  <h2 className="text-2xl font-bold text-center">Change Email or Name</h2>
  <form className="w-full px-[42px] md:px-[56px] ">
   <Input placeholder="yana@gmail.com" label="Email" type="email"/> 
   <Input placeholder="Yana Doe" label="Full Name" type="text"/> 
   <Input placeholder="********" label="Password" type="password"/> 
   <CTAButton cssProps="mt-8 mb-3 w-full">Update</CTAButton>
  </form>

  </div>
 
    <div className="flex flex-col items-center py-[24px] md:py-[32px]  w-[342px]  bg-card shadow-lg rounded-lg md:w-[400px]">
  <h2 className="text-2xl font-bold text-center">Change Password</h2>
  <form className="w-full px-[42px] md:px-[56px] ">
   <Input placeholder="********" label="Password" type="password"/> 
   <Input placeholder="********" label="Confirm Password" type="password"/> 

   <CTAButton cssProps="mt-8 mb-3 w-full">Update</CTAButton>
  </form>

  </div> 
  </div>
  </div>
    
  )
}

export default EditProfilePage
