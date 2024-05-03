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
}
export default cartReducer