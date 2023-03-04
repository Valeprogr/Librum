import {BsFacebook, BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs'

const SocialNetworkComponent = () => {
  return (
    <div className='flex  gap-4'>
    <BsFacebook className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
    <BsInstagram className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
    <BsTwitter className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
    <BsGithub className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
    </div>
  )
}

export default SocialNetworkComponent