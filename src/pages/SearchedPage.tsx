import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { bookProps } from '../types/BookProps';
import BookDataService from "../services/BookService";



const SearchedPage = () => {
    const { book }= useParams();
    const [data, setData] = useState<bookProps[]>([]);
    //console.log(book)


    useEffect(() => {
        const getData = async () => {
            try {
              let data = await BookDataService.getAll() as any
                data = await data.data.books
                //console.log(data)
                const result = await data.filter((ele: bookProps) => ele.title.includes(book as string))
                setData(result)
            }
            catch (error) {
              console.log(error)
            }
        }
        getData()
 
    }, []);
    
    //console.log(data)
    return (
        <div className="flex flex-col   justify-center px-[24px] md:px-20 pt-6">
            <h1 className="px-4"><span className="font-semibold  text-l">{book}</span> : <span className="italic">{data.length } results</span></h1>
            <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
                {!data.length ?
                    <p>Book not found</p>
                    :
                    <>
                        {data.map((ele: bookProps, index: number) => (<BookCard props={ele} key={index} />))}
                    </>
                    
                    
        }
            </div>
        </div>
    )
}

export default SearchedPage;