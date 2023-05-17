import React from "react";


const Searchbar = () => {
    return (
        <>
    <div className="lg:py-3 lg:w-96">
     <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
           <div className="absolute inset-y-0 left-0 flex items-center lg:pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  " placeholder="Search Book..." required />
           <button type="submit" className=" absolute right-2.5 bottom-2 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
      </form>
           
     </div> 
        </>
    )
}

export default Searchbar;