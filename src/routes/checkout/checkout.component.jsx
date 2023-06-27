import {
  Container,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.style.jsx'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cartDropdown.context'

const Checkout = () => {
  const { cartItems, totalCartPrice } = useContext(CartDropdownContext)

  return (
    <Container>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${totalCartPrice}</Total>
    </Container>
  )
}

export default Checkout
