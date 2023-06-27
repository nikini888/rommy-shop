import { CartItemContainer, Details } from './cart-item.style.jsx'
const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <Details>
        <p className="name">{name}</p>
        <span className="quanity">
          {quantity} x ${price}
        </span>
      </Details>
    </CartItemContainer>
  )
}

export default CartItem
