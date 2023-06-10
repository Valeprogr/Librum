import React, { useState, useEffect } from "react";
import { bookProps } from '../types/BookProps'
import BookDataService from "../services/BookService";
import { useAuth0 } from "@auth0/auth0-react";

const UserBooks = () => {
    const [data, setData] = useState<bookProps[]>([]);
    const { user } = useAuth0();
    useEffect(() => {
        const getData = async () => {
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let data = await BookDataService.getAll() as any
            data = data.data.books
            //console.log(data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const books = data.filter((ele : any )=> ele.email === user?.email );
            setData(books)
          }
          catch (error) {
            console.log(error)
          }
        }
        getData()
    }, []);
    console.log(data)
    return (
        <div className="py-12 flex flex-col items-center w-auto">
            <h1 className="text-4xl mb-8">My Books for sale</h1>
            {
                data ?
                    <>
            
                        {data.map(ele =>
                            <div key={ele._id} className="bg-gray-100  flex justify-between border w-full mb-4 items-center md:px-10">
                                <div className="w-auto"><img style={{ height: "100px", width: "full", objectFit: "cover" }} src={ele.imageUrl} /></div>
                                <div className=" ml-2 mr-22 w-[200px] md:w-[300px]">
                                    <p className="text-xl font-medium">{ele.author}</p>
                                    <p>{ele.title}</p>
                                </div>
      
                                <div className="ml-22 mr-2"><p>{ele.price}</p></div>
                                <div>
                                    <a href={`/delete-book/${ele._id}`} className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 md:px-4 px-2 rounded uppercase">
                                    delete
                                    </a>

                                </div>
                        
                            </div>)}
            
                    </>
                    :
                    <h2>Sorry you don`t have any books for sale </h2>
            }

        </div>
    )
}

export default UserBooks;