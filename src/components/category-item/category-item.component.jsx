import { useNavigate } from 'react-router-dom'

import {
  Body,
  CategoryItemContainer,
  BackgroundImage,
} from './category-item.style.jsx'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()
  const goToCategory = () => {
    navigate(route)
  }
  return (
    <CategoryItemContainer onClick={goToCategory}>
      <BackgroundImage $imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  )
}
export default CategoryItem
