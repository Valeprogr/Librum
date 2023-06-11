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
    //console.log(data)
    return (
        <div className="py-12 flex flex-col items-center w-auto">
            <h1 className="text-4xl mb-8">My Books for sale</h1>
            {
                data.length ?
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
                    <>
                    <div className=" flex flex-col items-center px-10 md:px-0  py-8">
                    <div className="inline-flex items-center">
                    <p className="text-2xl font-medium text-center mr-4">Sorry you don`t have any books for sale</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>


                            </div>
                            </div>
                    </>
            }

        </div>
    )
}

export default UserBooks;