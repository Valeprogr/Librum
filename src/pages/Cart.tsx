import { useShoppingCart } from "../context/ShoppingCartContext";


export const Cart = () => {
    const { cartItems,cartQuantity,removeFromCart } = useShoppingCart();

  //console.log(cartItems)
        
        return (
            <div className="py-12 flex flex-col items-center w-auto">
                <h1 className="text-4xl mb-8">Cart Book List</h1>
                {cartItems.map(ele =>
                    <div key={ele.id} className="bg-gray-100  flex justify-between border w-96 mb-4 items-center">
                        <div className="w-auto"><img style={{height:"100px", width:"full", objectFit:"cover"}} src={ele.imageUrl}/></div>
                        <div className="mr-22 w-[200px]">
                        <p>{ele.author}</p>
                        <p>{ele.title}</p>
                        </div>
      
                        <div className="ml-22"><p>{ele.price}</p></div>
                        <div>
                            <button type="button" onClick={()=>removeFromCart(ele)}>
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>  
                            </button>

                        </div>
                        
                    </div>)}
                {cartQuantity === 0 ? 
                    <div className="inline-flex">
                        <p className="font-bold mr-2">Your Cart is empty</p>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

                        </div>
                    </div> :
                    <>
                <p className="font-bold mt-12">Total Sum:</p>
                <p>$ {cartItems.reduce((n, { price }) => n +(parseFloat(price)), 0).toFixed(2)}</p>
                    </>}

            </div>
        )
    }
