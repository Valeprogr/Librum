import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {

    getItemQuantity: (id: string) => number
    increaseCartQuantity: (
        id: string | undefined,
        author: string,
        title: string,
        imageUrl: string,
        price: string)  => void
        removeFromCart: (id: unknown) => void
        cartQuantity: number
        cartItems: CartItem[]
}

type CartItem = {
    id: string
    quantity: number
    author: string
    title: string
    price: string
    imageUrl: string
}

const ShoppingCartContex = createContext({} as ShoppingCartContext)


export function useShoppingCart() {

    return useContext(ShoppingCartContex)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])


    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)


    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function increaseCartQuantity(id:any, author:string, title:string, price:string, imageUrl:string ) {
        setCartItems(currItems => {
            if (currItems.find(item  => item.id === id._id) == null) {
                return [...currItems, {id, quantity: 1, author, title, price,imageUrl }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1,  author, title, price,imageUrl}
                    } else {
                        return item
                    }
                })
            }
        })   
    }

    function removeFromCart(id: unknown) {
        setCartItems(currItems => {
            return currItems.filter(item => item !== id)
        })
    }

    return(
        <ShoppingCartContex.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems
        }}>
        {children}
    </ShoppingCartContex.Provider>
)}