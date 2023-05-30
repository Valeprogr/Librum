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
                <>
                    <h1>{book.data.book.title}</h1>
                    <p>{book.data.book.author}</p>
                    <p>{book.data.book.description}</p>
                    <p>{book.data.book.price }</p>
                </>
                :
                <>Loading...</>}
        </>
    )
}

export default BookPageInfo;