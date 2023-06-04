import React from 'react';
interface IPagination{
    totalBooks: number,
    booksPerPage: number,
    paginate: (pageNumber: number) => void
}

const Pagination = ({ booksPerPage, totalBooks,paginate } : IPagination) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav className="flex md:col-span-2 lg:col-span-3 justify-center mb-6">
            <ul className="flex items-center  space-x-1">
                {pageNumbers.map(number => (<li key={number} className='page-item'>
                    <a onClick={(e: any) => { paginate(number); e.preventDefault(); }} href='!#' className=' px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-dark hover:text-white'>
                        {number}
                    </a>
                </li>))}
          </ul>  
        </nav>
    );
}

export default Pagination;