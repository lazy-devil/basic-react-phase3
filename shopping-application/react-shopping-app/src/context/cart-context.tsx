import { createContext, useContext, useReducer } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cart-reducer";
import { StateType } from "../common/common";

const initState: StateType = {
    products: products,
    total: 0,
    amount: 0
}

// การสร้าง Context
const CartContext = createContext(initState)

// การสร้าง Provider
export const CartProvider = ({ children }: any) => {
    const [state, _dispatch] = useReducer(cartReducer, initState)
    return (
        <CartContext.Provider value={{ ...state }}>
            {children}
        </CartContext.Provider>
    )
}

// การนำเอา Context ไปใช้งานด้านนอก
export const useCart = () => {
    return useContext(CartContext)
}
