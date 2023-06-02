import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDataService from "../services/BookService";
import { bookProps } from "../types/BookProps";
const BookPageInfo = () => {
    const { id } = useParams<{ id?: string }>();
    const [book, setBook] = useState <bookProps | any>(null);

    useEffect(() => {
        const getData = async () => {
          try {
            let data = await BookDataService.get(id as string)
            console.log(data)
              setBook(data)
          }
          catch (error) {
            console.log(error)
          }
        }
        getData()
    }, []);
    //console.log(book.book.title)
    return (
        <>
            {book ?
                <div className="md:px-20  px-[24px] pt-20 flex flex-col mb-10">
                    <div className="flex mb-12 flex-col md:flex-row md:pr-10 md:shadow-xl ">
                        <div className="h-[340px] md:h-[400px] w-auto"><img className="h-full" src={book.data.book.imageUrl} alt={book.data.book.title} /></div>
                        <div className="mt-10 md:m-10">
                            <div className=" inline-flex text-2xl md:text-3xl font-bold ">
                            <h1 className="mr-3">{book.data.book.title}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                            </div>
                            <div className="text-xs mt-3">
                                <p><span className="uppercase">{book.data.book.genre}</span> | by <u className="font-semibold text-sm">{book.data.book.author}</u> (Author)</p>
                            </div>
                            <div className="mt-6 text-l font-semibold">
                            <p>{book.data.book.price } $</p>
                            </div>
                            <div className="w-auto mt-10">
                                <div>
                                    <em className="text-xs font-light">*Text the seller to finalize the purchase.</em>
                                </div>
                                <div className="mt-3 flex flex-col md:flex-row ">
                                <button className="w-full md:w-auto text-[14px] rounded-lg font-bold text-card p-2 px-4 bg-dark border-none shadow-md hover:bg-hover mr-3">Add to Cart
                                </button>
                                <a href={`mailto:user@user.com`}><button className="w-full md:w-auto text-[14px] bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded-lg">Write a Message</button></a>
                                </div>

                            </div>
                        </div>


                    </div>
                    
                    <p className="text-xl font-bold mb-4">Description</p>
                    
                    <p>{book.data.book.description}</p>
                    
                </div>
                :
                <>Loading...</>}
        </>
    )
}

export default BookPageInfo;