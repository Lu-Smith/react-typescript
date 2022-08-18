import { useContext, createContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
return useContext(ShoppingCartContext)
}

const [cartItems, setCartItems] = useState<CartItem>([])

export function ShoppingCartPovider( {children}: ShoppingCartProviderProps ) {
    return <ShoppingCartContext.Provider value={{}} >
        {children}
    </ShoppingCartContext.Provider>
}