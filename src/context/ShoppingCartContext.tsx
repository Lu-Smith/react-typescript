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



export function ShoppingCartPovider( {children}: ShoppingCartProviderProps ) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id:number) {
        return cartItems.find(item=> item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number) {
        setCartItems(currrentItems => {
            if (currrentItems.find(item => item.id === id) == null) {
                return [ ...currrentItems, {id, quantity: 1}]
            } else {
                return currrentItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number) {
        setCartItems(currrentItems => {
            if (currrentItems.find(item => item.id === id)?.quantity === 1) {
                return currrentItems.filter(item => item.id !== id)
            } else {
                return currrentItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currrentItems => {
            return currrentItems.filter(item => item.id !== id)
    })
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}} >
        {children}
    </ShoppingCartContext.Provider>
}