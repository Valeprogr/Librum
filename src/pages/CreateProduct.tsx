import React, { useState } from "react";
import BookDataService from "../services/BookService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";


const placeholder = "e.g 12.99";

export const CreateProduct = () => {
    const { isAuthenticated, user } = useAuth0();
    const [form, setForm] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        stock: 0,
        imageUrl: "",
        price: "",
        email: user?.email as string
    });
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {

        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    }
    
    const saveProductHandler = async(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        try { 
            if (user?.email) {
             BookDataService.create(form);
            toast.success('Succes! Your book has been added 📖',{
                position: toast.POSITION.TOP_CENTER 
            }

            )}
            setTimeout(() => {
              setForm({
                title: "",
                author: "",
                description: "",
                genre: "",
                stock: 0,
                imageUrl: "",
                price: "",
                email: user?.email as string
            })  
            },1000)
        } catch (error:unknown) {
            toast.error('Information missing!',{
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

 //console.log(form)
    
    return (
        <>
            {isAuthenticated ?
                <>
                    <ToastContainer />
    <div className="h-auto flex justify-center items-center py-10">
    <div className="h-auto bg-card shadow-lg rounded-lg w-auto md:w-[600px] p-20">
    <h2 className="text-3xl font-bold text-center">Add book!</h2>
                    <p className="pt-2 text-dark/70">Please remember that all information is required and to provide as much detail as possible..</p>
                    <p className="text-sm mt-4 text-dark/70">* Required field</p>
            <form className="my-4 text-slate-500 leading-relaxed w-auto mt-4">
            <label className='font-bold' htmlFor="name">Title :  *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="title" value={form.title}  onChange={changeHandler} required></input>
            <label className='font-bold'>Author :  *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="author" value={form.author} onChange={changeHandler} required></input>
            <label className='font-bold'>Description :  *</label>
            <textarea  className=' border mt-1 rounded px-4 w-full bg-gray-50' type="textarea"  placeholder="write a little summary..." rows="6"   name="description" value={form.description}  onChange={changeHandler} required></textarea>
            <label className='font-bold'>Genre : *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="genre" value={form.genre} onChange={changeHandler} required></input>
            <label className='font-bold'>Stock : *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="stock" value={form.stock} onChange={changeHandler} required></input>
            <label className='font-bold'>Price : *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="price" value={form.price} placeholder={placeholder} onChange={changeHandler} required></input>
            <label className='font-bold'>Url Image :  *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="imageUrl" value={form.imageUrl} onChange={changeHandler} required></input>
        </form>  
            <button className=" bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="button" onClick={saveProductHandler}>Save</button>
    </div>
            </div>
                </>
                :
                <div className=" flex flex-col items-center px-10 md:px-0 py-32  md:py-64">
                    <div className="inline-flex items-center">
                    <p className="text-3xl font-bold text-center mr-4">Login Required</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
</svg>

                    </div>
                    

                    <p className="text-xl font-[500] mt-4">You can`t see the submission data form ,  Please login first.</p>
                    <div className="mt-8">
                     <LoginButton />   
                    </div>
                    
                </div>
        }

    </>
    )
}