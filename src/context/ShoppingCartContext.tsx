import { ReactNode, createContext, useContext } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}


const ShoppingCartContex = createContext({})


export function useShoppingCart() {

    return useContext(ShoppingCartContex)
}

export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {
    return(
    <ShoppingCartContex.Provider value={{}}>
        {children}
    </ShoppingCartContex.Provider>
)}