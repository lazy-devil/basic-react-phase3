import { ProductType } from '../../common/common'
import { useCart } from '../../context/cart-context'
import Item from '../item-component/item-component'
import './cart-component.css'

export default function Cart() {
    const { products } = useCart()
    return (
        <div>
            {products.map((data: ProductType) => {
                return <Item key={data.id} {...data} />
            })}
        </div>
    )
}