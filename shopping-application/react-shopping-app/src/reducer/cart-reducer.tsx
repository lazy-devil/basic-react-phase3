import { ProductType } from "../common/common"

const cartReducer = (state: any, action: any) => {
    // กระบวนการจัดการ state ผ่าน action

    if (action.type == 'CALCULATE_TOTAL') {
        const { total, amount } =
            state.products.reduce(
                (cartTotal: any, item: ProductType) => {
                    const { price, quantity } = item
                    const totalPrice = price * quantity // ยอดรวมสินค้าแต่ละรายการ
                    cartTotal.total += totalPrice // จำนวนเงินรวม
                    cartTotal.amount += quantity // ปริมาณรวม
                    return cartTotal
                }, { total: 0, amount: 0 }
            )
        return { ...state, total, amount }
    }
    if (action.type == 'REMOVE') {
        return {
            ...state,
            products: state.products.filter((item: ProductType) => item.id != action.payload)
        }
    }
    if (action.type == 'ADD') {
        let updateProduct = state.products.map((item: any) => {
            if (item.id == action.payload) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        return {
            ...state,
            products: updateProduct
        }
    }
    if (action.type == 'SUBTRACT') {
        let updateProduct = state.products.map((item: any) => {
            if (item.id == action.payload) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        }).filter((item: ProductType) => item.quantity != 0)
        return {
            ...state,
            products: updateProduct
        }
    }
}
export default cartReducer