import { useCart } from '../../context/cart-context'
import './header-component.css'

export default function Header() {
    const { amount, formatMoney } = useCart()
    return (
        <header>
            <p>Shopping Application</p>
            <p>สินค้าในตะกร้า : {formatMoney(amount)}</p>
        </header>
    )
}