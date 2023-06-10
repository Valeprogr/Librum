import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDataService from "../services/BookService";
import { bookProps } from "../types/BookProps";
import { useNavigate } from "react-router-dom";

const DeleteBook = () => {
    const { id } = useParams<{ id?: string }>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [book, setBook] = useState<bookProps | any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
          try {
              let data = await BookDataService.get(id as string)
              data = data.data.book
            console.log(data)
              setBook(data)
          }
          catch (error) {
            console.log(error)
          }
        }
        getData()
    }, []);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deleteHandler = (e: any) => {
        e.preventDefault();
        BookDataService.delete(id as string)
        setTimeout(() => {
            navigate(-1)
        },2000)
    }

    const cancelHandler = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col items-center py-24 text-center">
            <h1 className="text-4xl mb-6">Delete Book</h1>
            {book ? 
                <div className="flex flex-col items-center">
                    <p className="text-xl">Are you sure to delete this Book?</p>
                    <p className="text-sm">This Process cannot be undone</p>
                    <img className="h-60 mt-8" src={book.imageUrl}></img>
                    
                    <div className="mt-8">
                        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 md:px-4 px-2 rounded uppercase mr-4" onClick={cancelHandler}>CANCEL</button>
                        <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 md:px-4 px-2 rounded uppercase" onClick={deleteHandler}>DELETE</button>
                    </div>
                </div>
                :
                <p>Error , book not found!</p>
            }
        </div>
    )
}

export default DeleteBook;