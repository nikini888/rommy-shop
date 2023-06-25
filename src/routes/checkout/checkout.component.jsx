import './checkout.style.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cartDropdown.context'

const Checkout = () => {
  const { cartItems } = useContext(CartDropdownContext)
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  )
}

export default Checkout
