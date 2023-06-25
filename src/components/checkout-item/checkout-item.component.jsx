import './checkout-item.style.scss'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cartDropdown.context'
import { MdChevronLeft, MdChevronRight, MdOutlineClose } from 'react-icons/md'
const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item
  const { changeQuantityProductItem, removeProdutcFromCart } =
    useContext(CartDropdownContext)

  const handleClickArrow = (event) => {
    const arrow = event.target.closest('.arrow')
    if (!arrow) return
    changeQuantityProductItem(item, arrow.dataset.changeTo)
  }

  const handleClickRemove = () => {
    removeProdutcFromCart(item)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span
          className="arrow"
          onClick={handleClickArrow}
          data-change-to={quantity - 1}
        >
          <MdChevronLeft />
        </span>
        <span className="value">{quantity}</span>
        <span
          className="arrow "
          onClick={handleClickArrow}
          data-change-to={quantity + 1}
        >
          <MdChevronRight />
        </span>
      </div>
      <span className="price">{price * quantity}</span>
      <div className="remove-button" onClick={handleClickRemove}>
        <MdOutlineClose />
      </div>
    </div>
  )
}

export default CheckoutItem
