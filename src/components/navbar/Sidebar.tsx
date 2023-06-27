import { useEffect, useRef, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { GrClose } from "react-icons/gr"
import NavbarLink from "./NavbarLink"
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import UserDataServices from "../../services/UserService"
import  {IUserData}  from '../../types/user.type';
import { useClickOutside } from '../../hooks/useClickOutside';

interface Sidebar {
    closeEvent: () => void
}

const Sidebar = ({ closeEvent }: Sidebar) => {
    const [data, setData] = useState<IUserData>({
        email: '',
        books: ''
    });
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            if (user) {
                setData({email: user.email as string})
                //const data = request(url, 'POST', user.email);
                UserDataServices.create(data)
            }
        }
    }, [])
    const element = useRef<HTMLDivElement>(null);

   

    useClickOutside(element, closeEvent)

    return (

        <div ref={element} className='absolute  top-0 right-0 w-[240px] h-screen max-h-screen  bg-card shadow-lg animation_right flex items-center justify-between flex-col px-5 py-12 pt-10 z-10'>
            <button className='absolute top-4 right-4'><GrClose className='text-2xl font-bold' onClick={closeEvent} /></button>
            <div className="flex flex-col  w-full pt-2 mb-4">
                <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/' icon='../icons/home.svg' text='Home' />
                <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/books' icon='../icons/categories.svg' text='Books' />
                <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/about' icon='../icons/about.svg' text='About' />
                <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/location' icon='../icons/location.svg' text='Location' />
                {isAuthenticated ?
                    <>
                        <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/create-product' icon='../icons/book.svg' text='Add New Book' />
                        <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/user-books' icon='../icons/book.svg' text='User Books' />
                        <NavbarLink clickEvent={closeEvent} cssPropText='text-lg' cssPropImg='w-10 p-2' path='/profile' icon='../icons/book.svg' text='Profile' />
                        <LogoutButton />
                        </>
                    : <LoginButton />}
            </div>
            <div className="flex gap-4">
                <BsFacebook className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
                <BsInstagram className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
                <BsTwitter className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
                <BsGithub className='p-2 bg-dark hover:bg-dark/50 rounded-lg text-[40px] text-card transition-all duration-300' />
            </div>
        </div>
        
    )
}

export default Sidebar