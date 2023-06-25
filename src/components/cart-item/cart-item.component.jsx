import './cart-item.style.scss'
const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <p className="name">{name}</p>
        <span className="quanity">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
