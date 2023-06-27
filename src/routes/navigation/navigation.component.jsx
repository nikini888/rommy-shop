import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { ReactComponent as RommyLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase.utils'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  CarrIconContainer,
  ShoppingIcon,
  ItemCount,
} from './navigation.style.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { CartDropdownContext } from '../../context/cartDropdown.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isDropdown, setIsDropDown, countCartItems, cartItems } =
    useContext(CartDropdownContext)

  const toggleCartDropDown = () => {
    setIsDropDown(!isDropdown)
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <RommyLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CarrIconContainer onClick={toggleCartDropDown}>
            <ShoppingIcon>
              <ShoppingBag />
            </ShoppingIcon>
            <ItemCount>{countCartItems}</ItemCount>
          </CarrIconContainer>
        </NavLinks>
        {isDropdown && <CartDropdown cartItems={cartItems} />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
