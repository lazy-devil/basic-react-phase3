import { ProductType } from '../../common/common'
import { useCart } from '../../context/cart-context'
import Item from '../item-component/item-component'
import './cart-component.css'

export default function Cart() {
    const { products, total, formatMoney } = useCart()
    return (
        <div className='cart'>
            <h1 style={{ textAlign: 'center' }}>
                {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท` : 'ไม่มีสินค้าในตะกร้า'}
            </h1>
            {products.map((data: ProductType) => {
                return <Item key={data.id} {...data} />
            })}
        </div>
    )
}