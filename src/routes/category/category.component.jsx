import { Container, Title } from './category.style.jsx'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context'
import { useContext, useState, useEffect, Fragment } from 'react'
import ProductCart from '../../components/product-card/product-card.component'
const Category = () => {
  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Container>
    </Fragment>
  )
}

export default Category
