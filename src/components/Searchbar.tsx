import React,{useEffect, useState} from "react";
import  BookDataService  from "../services/BookService";
import { bookProps } from "../types/BookProps";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState<bookProps[]>([]);

  const filteredBooks = getFilteredBooks(query);
  
  //console.log(filteredBooks)
  function getFilteredBooks(query: string) {
    if (!query) {
      return data
    }

    return data.filter(ele => ele.title.includes(query.toLowerCase()))
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let data = await BookDataService.getAll() as any
      data = data.data.books
      //console.log(data)
      setData(data)
    }
    catch (error) {
      console.log(error)
    }
  }
  
  const handleClick = () => {
    navigate(`/search/${query}`)
  }

  //console.log(data)
    return (
        <>
    <div className="lg:py-3 lg:w-96 relative">
     <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div>
           <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  " placeholder="Search Book..." onChange={(e)=> setQuery(e.target.value)}  />
           <button type="button" className=" absolute h-10 top-2 lg:top-5 right-2.5   bottom-5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Search</button>
      </div>
      </form>
          {!query.length ?
            null :
            <div className="bg-white w-full h-auto p-4 border-b border-r border-l border-gray-300  absolute z-10" >
            <ul className="flex flex-col">
              {filteredBooks.map(ele => <a key={ele.author} href={`/search/${ele.title}`} className="hover:underline hover:text-red-600"><li>{ele.title }</li></a>)}
              </ul>
            </div>
            }
     </div> 
        </>
    )
}

export default Searchbar;