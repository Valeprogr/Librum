import CTAButton from "./CTAButton"
import { bookProps } from "../types/bookProps"

interface IBookCard {
  clickEvent?: () => void,
  props: bookProps
}


const BookCard = ({ clickEvent, props }: IBookCard, key: number) => {
  
  return (
    <div key={key} className='w-[290px] flex flex-col justify-start py-2 pt-8 items-center px-4'>
      <img src='../book.jpg' alt='book' className='w-[290px] rounded-lg bg-card p-5 ' />
      <div className='pt-3'>
        <h2 className='text-[20px] font-[500]'>{props.title}</h2>
        <h3 className="text-[18px] font-[400] ">{props.author}</h3>
        <p className='text-[15px] text-dark/80'>{props.description}</p>
        <div className="flex justify-between items-center pt-2">
          <CTAButton cssProps="text-[14px]">Add to Cart</CTAButton>
          <button onClick={clickEvent} className="hover:bg-dark/10 rounded-lg transition-all duration-300 p-1.5 px-4 text-[16px] font-bold">Read more... </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard