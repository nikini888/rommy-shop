import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cartDropdown.context'

import Button from '../button/button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component'
const CartDropdown = ({ cartItems }) => {
  const { setIsDropDown, isDropdown } = useContext(CartDropdownContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    toggleCartDropDown()
    navigate('/checkout')
  }
  const toggleCartDropDown = () => {
    setIsDropDown(!isDropdown)
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length >= 1 &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>

      <Button type="button" onClick={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </div>
  )
}

export default CartDropdown
