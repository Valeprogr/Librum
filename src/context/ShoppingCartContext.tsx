import { ReactNode, createContext, useContext,useState } from "react"
import { bookProps } from "../types/BookProps"
type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (
        id: any,
        author: string,
        title: string,
        imageUrl: string,
        price: any) => void
    decreaseCartQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: any
    quantity: number
    author: string
    title: string
    price: any
    imageUrl: string
}

const ShoppingCartContex = createContext({} as ShoppingCartContext)


export function useShoppingCart() {

    return useContext(ShoppingCartContex)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:any, author:string, title:string, price:string, imageUrl:string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id._id) == null) {
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
    function decreaseCartQuantity(id:string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })   
    }
    function removeFromCart(id: string) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContex.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartQuantity,
            cartItems
        }}>
        {children}
    </ShoppingCartContex.Provider>
)}