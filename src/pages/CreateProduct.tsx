import React, { useState } from "react";
import BookDataService from "../services/BookService";

export const CreateProduct = () => {
    const [form, setForm] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        stock: 0,
        imageUrl: ""
    });
    
    const changeHandler = (event:React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    }
    
    const saveProductHandler = async(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        try { 
            let data = await BookDataService.create(form);
            setTimeout(() => {
              setForm({
                title: "",
                author: "",
                description: "",
                genre: "",
                stock: 0,
                imageUrl: ""
            })  
            },1000)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
    <>
    <div className="flex justify-center items-center py-10">
    <div className=" bg-card shadow-lg rounded-lg w-auto md:w-[600px] p-20">
    <h2 className="text-3xl font-bold text-center">Add book!</h2>
    <p className="pt-2 text-dark/70 text-sm">Welcome back here you can add a book to the online bookstore.</p>
                    <form className="my-4 text-slate-500 leading-relaxed w-auto">
                        <label className='font-bold' htmlFor="name">Title:</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="title" value={form.title}  onChange={changeHandler}></input>
                          <label className='font-bold'>Author :</label>
                        <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="author" value={form.author} onChange={changeHandler}></input>
                        <label className='font-bold'>Description :</label>
                        <textarea  className=' border mt-1 rounded px-4 w-full bg-gray-50 h-auto' type="textarea"  placeholder="write a little summary..." rows="10"   name="description" value={form.description}  onChange={changeHandler}></textarea>
                          <label className='font-bold'>Genre :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="genre" value={form.genre} onChange={changeHandler}></input>
                          <label className='font-bold'>Stock :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="stock" value={form.stock} onChange={changeHandler}></input>
                          <label className='font-bold'>Url Image :</label>
                          <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' type="text" name="imageUrl" value={form.imageUrl} onChange={changeHandler}></input>
                    </form>  
                    <button className=" bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="button" onClick={saveProductHandler}>Save</button>
                </div>
                </div>
        </>
    )
}