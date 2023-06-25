import { CartDropdownContext } from '../../context/cartDropdown.context'
import Button from '../button/button.component'
import './product-card.style.scss'
import { useContext } from 'react'

const ProductCart = ({ product }) => {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartDropdownContext)

  const addProductToCartItems = () => {
    addItemToCart(product)
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type="button"
        buttonType="inverted"
        onClick={addProductToCartItems}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCart
