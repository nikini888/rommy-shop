import {
  Container,
  ImageContainer,
  Quantity,
  RemoveButton,
} from './checkout-item.style.jsx'
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
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <Quantity>
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
      </Quantity>
      <span className="price">{price * quantity}</span>
      <RemoveButton onClick={handleClickRemove}>
        <MdOutlineClose />
      </RemoveButton>
    </Container>
  )
}

export default CheckoutItem
