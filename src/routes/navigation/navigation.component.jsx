import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as RommyLogo } from '../../assets/crown.svg'
import './navigation.style.scss'

const Navigation = () => {
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
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
