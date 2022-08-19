import { useContext, createContext, ReactNode, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContexts = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContexts)

export function useShoppingCart() {

    return useContext(ShoppingCartContext)
}



export function ShoppingCartPovider( {children}: ShoppingCartProviderProps ) {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        [])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

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

    return <ShoppingCartContext.Provider 
               value={{
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity }} >
        {children}
        <ShoppingCard isOpen = {isOpen}/>
    </ShoppingCartContext.Provider>
}