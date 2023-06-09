import { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'
import { bookProps } from '../types/BookProps'
import BookDataService from "../services/BookService";
import CTAButton from '../components/CTAButton'
import Pagination from '../components/Pagination';
import { Spinner } from '../components/spinner/Spinner';



const BooksPage = () => {
  const [data, setData] = useState<bookProps[]>([]);
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  const [category, setCategory] = useState<bookProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);


  useEffect(() => {
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
    getData()
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryHadler = (e: any) => {
    if(currentPage != 1 ){setCurrentPage(1)}
    setCategoriesOpen(true)
    console.log(e.target.value)
    const books = data.filter(books => books.genre === e.target.value);
    setCategory(books)
    
  }
  //console.log(category)

  //Get current Post
  const indexLastBook = currentPage * booksPerPage;
  console.log(indexLastBook)
  const indexOfFirstBook = indexLastBook - booksPerPage;
  console.log(indexOfFirstBook)
  const currentBooksGeneral = data.slice(indexOfFirstBook, indexLastBook);
  const currentBooksPerCategory = category.slice(indexOfFirstBook, indexLastBook);

  console.log(currentBooksGeneral)
  
  //Change Page
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <>
      {data ?
        
        <div className="flex  items-center justify-center w-auto">
        <div className="max-w-[1300px] w-full flex flex-col justify-start items-center px-[24px] md:px-20 pt-6">
          <div className='flex justify-between items-center w-full relative'>
            <h2 className="w-full text-2xl md:text-3xl font-bold">Our Books</h2>
          </div>
          <div className='hidden gap-3 md:flex justify-center items-center'>
            <CTAButton  cssProps='text-[14px]' value={'novel'}  clickEvent ={(e: React.MouseEvent<HTMLElement>) =>categoryHadler(e)}>Novel</CTAButton>
            <CTAButton  cssProps='text-[14px]' value={'biography'} clickEvent ={(e: React.MouseEvent<HTMLElement>)=>categoryHadler(e)}>Biography</CTAButton>
            <CTAButton  cssProps='text-[14px]' value={'fantasy'} clickEvent ={(e: React.MouseEvent<HTMLElement>)=>categoryHadler(e)}>Fantasy</CTAButton>
            <CTAButton  cssProps='text-[14px]' value={'horror'} clickEvent ={(e: React.MouseEvent<HTMLElement>)=>categoryHadler(e)}>Horror</CTAButton>
            <CTAButton  cssProps='text-[14px]' value={'romance'} clickEvent ={(e: React.MouseEvent<HTMLElement>)=>categoryHadler(e)}>Romance</CTAButton>
            <CTAButton  cssProps='text-[14px]' value={'thriller'} clickEvent ={(e: React.MouseEvent<HTMLElement>)=>categoryHadler(e)}>Thriller</CTAButton>
            </div>
        
          <div className='pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center'>
              {categoriesOpen  ?
                           <>
                           {currentBooksPerCategory.map((ele: bookProps, index: number) => (<BookCard props={ele} key={index} />))}
                           <Pagination booksPerPage={booksPerPage} totalBooks={category.length} paginate={paginate} />
                </>
                :
                <>
                    {currentBooksGeneral.map((ele: bookProps, index: number) => (<BookCard props={ele} key={index} />))}
                    <Pagination booksPerPage={booksPerPage} totalBooks={data.length} paginate={paginate} />
              </>
        
            }
        
          </div>
        </div>
      </div>
  :
            <Spinner />
  }
    </>

  )
}

export default BooksPage