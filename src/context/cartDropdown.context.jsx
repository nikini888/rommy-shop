import { createContext, useState, useEffect } from 'react'

const addProductToCartItem = (cartItems, product) => {
  const isProductOnCartitems = cartItems.find((item) => item.id === product.id)

  if (isProductOnCartitems) {
    return cartItems.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }

  return [...cartItems, { ...product, quantity: 1 }]
}

const changeQuantityProduct = (cartItems, product, changeTo) => {
  if (changeTo === '0') {
    return removeProduct(cartItems, product)
  }
  return cartItems.map((item) => {
    return item.id === product.id ? { ...item, quantity: +changeTo } : item
  })
}

const removeProduct = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id)
}
export const CartDropdownContext = createContext({
  isDropdown: false,
  setIsDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  countCartItems: 0,
  changeQuantityProductItem: () => {},
  removeProdutcFromCart: () => {},
})

export const CartDropdownProvider = ({ children }) => {
  const [isDropdown, setIsDropDown] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [countCartItems, setCountCartItems] = useState(0)
  useEffect(() => {
    const countItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )
    setCountCartItems(countItems)
  }, [cartItems])
  const addItemToCart = (product) => {
    setCartItems(addProductToCartItem(cartItems, product))
  }
  const changeQuantityProductItem = (product, changeTo) => {
    setCartItems(changeQuantityProduct(cartItems, product, changeTo))
  }
  const removeProdutcFromCart = (product) => {
    setCartItems(removeProduct(cartItems, product))
  }
  const value = {
    isDropdown,
    setIsDropDown,
    cartItems,
    addItemToCart,
    countCartItems,
    changeQuantityProductItem,
    removeProdutcFromCart,
  }
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  )
}
