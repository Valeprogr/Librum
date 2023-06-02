import { useState, useRef, LegacyRef, useEffect } from 'react'
import BookCard from '../components/BookCard'
import { bookProps } from '../types/BookProps'
import BookDataService from "../services/BookService";
import CTAButton from '../components/CTAButton'




const BooksPage = () => {
  const [data, setData] = useState<bookProps[]>([]);
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const element = useRef<HTMLDivElement>(null)

  const [category, setCategory] = useState<bookProps[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
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

  const categoryHadler = (e:any) => {
    console.log(e.target.value)
    const books = data.filter(books => books.genre === e.target.value);
    setCategory(books)
  }
  console.log(category)

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center px-[24px] md:px-20 pt-6">
        <div className='flex justify-between items-center w-full relative'>
          <h2 className="w-full text-2xl md:text-3xl font-bold">Our Books</h2>
        </div>
        <div className='hidden gap-3 md:flex justify-center items-center'>
          <CTAButton  cssProps='text-[14px]' value={'novel'}  clickEvent ={(e:any) =>categoryHadler(e)}>Novel</CTAButton>
          <CTAButton  cssProps='text-[14px]' value={'biography'} clickEvent ={(e:any)=>categoryHadler(e)}>Biography</CTAButton>
          <CTAButton  cssProps='text-[14px]' value={'fantasy'} clickEvent ={(e:any)=>categoryHadler(e)}>Fantasy</CTAButton>
          <CTAButton  cssProps='text-[14px]' value={'horror'} clickEvent ={(e:any)=>categoryHadler(e)}>Horror</CTAButton>
          <CTAButton  cssProps='text-[14px]' value={'romance'} clickEvent ={(e:any)=>categoryHadler(e)}>Romance</CTAButton>
          <CTAButton  cssProps='text-[14px]' value={'thriller'} clickEvent ={(e:any)=>categoryHadler(e)}>Thriller</CTAButton>
        </div>
        <div className='pt-4 flex flex-wrap items-center justify-center'>
          {data ?
            <>
            {!category  ?
            <>
            {data.map((ele: bookProps, index: number) => (<BookCard  props={ele} key={index} />))}
            </>
            :
            <>
            {category.map((ele: bookProps, index: number)=>(<BookCard  props={ele} key={index}/>))}
            </>
            

          }
            </>
            : <div>Loading...</div>}

        </div>
      </div>
    </div >

  )
}

export default BooksPage