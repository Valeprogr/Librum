import React, { useState } from "react";
import BookDataService from "../services/BookService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const placeholder = "e.g 12.99";

export const CreateProduct = () => {
    const [error, setError]:any = useState(null);
    const [form, setForm] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        stock: 0,
        imageUrl: "",
        price:''
    });
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {

        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    }
    
    const saveProductHandler = async(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        try { 
            let data = await BookDataService.create(form);
            toast.success('Succes! Your book has been added 📖',{
                position: toast.POSITION.TOP_CENTER
            })
            setTimeout(() => {
              setForm({
                title: "",
                author: "",
                description: "",
                genre: "",
                stock: 0,
                imageUrl: "",
                price:''
            })  
            },1000)
        } catch (error:any) {
            toast.error('Information missing!',{
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    
    return (
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
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" placeholder={placeholder} name="stock" value={form.stock} onChange={changeHandler} required></input>
            <label className='font-bold'>Price : *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="price" value={form.price} onChange={changeHandler} required></input>
            <label className='font-bold'>Url Image :  *</label>
            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="imageUrl" value={form.imageUrl} onChange={changeHandler} required></input>
        </form>  
            <button className=" bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="button" onClick={saveProductHandler}>Save</button>
    </div>
            </div>
    </>
    )
}