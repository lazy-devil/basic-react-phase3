import { createContext, useContext, useEffect, useReducer } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cart-reducer";
import { StateType } from "../common/common";

const initState: StateType = {
    products: products,
    total: 0,
    amount: 0,
    formatMoney: (v: any) => v
}

// การสร้าง Context
const CartContext = createContext(initState)

// การสร้าง Provider
export const CartProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(cartReducer, initState)
    function formatMoney(money: any) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    useEffect(() => {
        dispatch({ type: "CALCULATE_TOTAL" })
    }, [state.products])
    return (
        <CartContext.Provider value={{ ...state, formatMoney }}>
            {children}
        </CartContext.Provider>
    )
}

// การนำเอา Context ไปใช้งานด้านนอก
export const useCart = () => {
    return useContext(CartContext)
}
