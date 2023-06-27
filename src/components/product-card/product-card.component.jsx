import { CartDropdownContext } from '../../context/cartDropdown.context'
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component'
import { Container, Footer } from './product-card.style.jsx'
import { useContext } from 'react'

const ProductCart = ({ product }) => {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartDropdownContext)

  const addProductToCartItems = () => {
    addItemToCart(product)
  }
  return (
    <Container>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCartItems}
      >
        Add to cart
      </Button>
    </Container>
  )
}

export default ProductCart
