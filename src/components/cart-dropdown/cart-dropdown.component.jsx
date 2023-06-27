import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cartDropdown.context'

import Button from '../button/button.component'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.style.jsx'
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
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}

      <Button type="button" onClick={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
