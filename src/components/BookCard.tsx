import CTAButton from "./CTAButton"

interface BookCard {
  clickEvent?: () => void 
}

const BookCard = ({clickEvent}: BookCard) => {
  return (
    <div className='w-[290px] flex flex-col justify-start py-2 pt-8 items-center px-4'>
    <img src='../book.jpg' alt='book' className='w-[290px] rounded-lg bg-card p-5 '/>
    <div className='pt-3'>
    <h2 className='text-[20px] font-[500]'>Book Title</h2>
    <h3 className="text-[18px] font-[400] ">Writer name</h3>
    <p className='text-[15px] text-dark/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="flex justify-between items-center pt-2">
    <CTAButton cssProps="text-[14px]">Add to Cart</CTAButton>
    <button onClick={clickEvent} className="hover:bg-dark/10 rounded-lg transition-all duration-300 p-1.5 px-4 text-[16px] font-bold">Read more... </button> 
    </div>
    </div>
    </div>
  )
}

export default BookCard