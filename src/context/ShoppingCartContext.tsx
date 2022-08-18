import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
return useContext(ShoppingCartContext)
}



export function ShoppingCartPovider( {children}: ShoppingCartProviderProps ) {
    return <ShoppingCartContext.Provider value={{}} >
        {children}
    </ShoppingCartContext.Provider>
}