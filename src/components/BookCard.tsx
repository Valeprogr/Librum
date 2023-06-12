/* eslint-disable react/prop-types */
import { bookProps } from "../types/BookProps";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useAuth0 } from "@auth0/auth0-react";

interface IBookCard {
  clickEvent?: (() => void | undefined) | undefined,
  props: bookProps
}

const BookCard = ( {props} : IBookCard) => {
  const { increaseCartQuantity} = useShoppingCart();
  const { isAuthenticated } = useAuth0();
  //const quantity = getItemQuantity(props._id)

  const addBookHandler = () => {
    if (isAuthenticated) {
        increaseCartQuantity(props._id, props.author,props.title, props.price,props.imageUrl)
    } else {
        alert('Please Loging first before add books to the cart')
    }
}

  return (
    <div key={props._id} className='w-[290px] flex flex-col  justify-start py-2 pt-8 items-center px-4'>
      <img src={props.imageUrl} alt='book' className='w-[290px] h-[360px]  rounded-lg bg-card p-5 ' />
      <div className='pt-3'>
        <h2 className='text-[20px] font-[500]'>{props.title}</h2>
        <h3 className="text-[18px] font-[400] ">{props.author}</h3>
        <p className='text-[15px] text-dark/80 line-clamp-4'>{props.description}</p>
        <div className="flex justify-between items-center pt-2">
          <button className="text-[14px] rounded-lg font-bold text-card p-2 px-4 bg-dark border-none shadow-md hover:bg-hover" onClick={() => addBookHandler()}>Add to Cart</button>
          <a href={`/book/${props._id}`}><button  className="hover:bg-dark/10 border rounded-lg transition-all duration-300 p-1.5 px-4 text-[16px] font-bold">Read more... </button></a>
        </div>
      </div>
    </div>
  )
}



export default BookCard