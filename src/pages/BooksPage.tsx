import { useState, useRef, LegacyRef, useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import BookCard from '../components/BookCard'
import CTAButton from '../components/CTAButton'
import Modal from '../components/Modal'
import { bookProps } from '../types/BookProps'
import BookDataService from "../services/BookService";
import { useClickOutside } from '../hooks/useClickOutside'



const BooksPage = () => {
  const [data, setData] = useState<bookProps[]>([]);
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const element = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false);

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
 
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const closeHandler = () => {
    setCategoriesOpen(false)
  }
  
useClickOutside(element, closeHandler)
  const modal = (
    <Modal onClose={handleClose}>
      here come info about book and picture
    </Modal>
  )
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center px-[24px] md:px-20 pt-6">
        <div className='flex justify-between items-center w-full relative'>
          <h2 className="w-full text-2xl md:text-3xl font-bold">Our Books</h2>
          <CTAButton clickEvent={() => setCategoriesOpen(true)} cssProps='md:hidden flex justify-center gap-4 items-center px-6' >Geners <img src='../icons/arrowDown.svg' alt='arrow' className={categoriesOpen ? `rotate-90 transition-all duration-300 w-6` : 'w-6'} /></CTAButton>
          {
            categoriesOpen && (
              <div ref={element} className='bg-card p-2 py-5 pt-14 flex flex-wrap justify-center items-center gap-2 w-full absolute top-0 left-0 right-0 rounded-lg transition-all duration-500'>
                <button className='absolute top-4 right-4'><GrClose className='text-2xl font-bold' onClick={closeHandler} /></button>
          <CTAButton cssProps='text-[14px]'>Novel</CTAButton>
          <CTAButton cssProps='text-[14px]'>Biography</CTAButton>
          <CTAButton cssProps='text-[14px]'>Fantasy</CTAButton>
          <CTAButton cssProps='text-[14px]'>Horror</CTAButton>
          <CTAButton cssProps='text-[14px]'>Literature</CTAButton>
          <CTAButton cssProps='text-[14px]'>Romance</CTAButton>
          <CTAButton cssProps='text-[14px]'>Thriller</CTAButton>
              </div>
            )
          }
        </div>
        <div className='hidden gap-3 md:flex justify-center items-center'>
          <CTAButton cssProps='text-[14px]'>Novel</CTAButton>
          <CTAButton cssProps='text-[14px]'>Biography</CTAButton>
          <CTAButton cssProps='text-[14px]'>Fantasy</CTAButton>
          <CTAButton cssProps='text-[14px]'>Horror</CTAButton>
          <CTAButton cssProps='text-[14px]'>Literature</CTAButton>
          <CTAButton cssProps='text-[14px]'>Romance</CTAButton>
          <CTAButton cssProps='text-[14px]'>Thriller</CTAButton>
        </div>
        <div className='pt-4 flex flex-wrap items-center justify-center'>

          {data ?
            <>
              {data.map((ele:bookProps, index:number) => (<BookCard clickEvent={handleClick} props={ele} key={ index}  />))}
            </>
            :
            <div>Qualcosa e andato storto</div>
            
          }
          
          {showModal && modal}
        </div>
      </div>
    </div>
  )
}

export default BooksPage