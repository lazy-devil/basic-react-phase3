import { useCart } from '../../context/cart-context'
import './item-component.css'

export default function Item(props: any) {
    const { id, name, price, image, quantity } = props
    const { formatMoney } = useCart()
    return (
        <div className='card'>
            <img src={image} alt={id} />
            <div className='product' >
                <p className='name'>ชื่อสินค้า : {name}</p>
                <p className='price'>ราคา : {formatMoney(price)} บาท</p>
            </div>
            <div className='quantity'>
                <button>+</button>
                <input className='text' value={formatMoney(quantity)} disabled />
                <button>-</button>
            </div>
            <div className='total-price'>
                {formatMoney(quantity * price)}
            </div>
            <button>ลบสินค้า</button>
        </div>
    )
}