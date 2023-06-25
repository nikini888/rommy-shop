import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { ReactComponent as RommyLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase.utils'
import './navigation.style.scss'
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <RommyLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <div className="cart-icon-container" onClick={toggleCartDropDown}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{countCartItems}</span>
          </div>
        </div>
        {isDropdown && <CartDropdown cartItems={cartItems} />}
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
