import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
export const CarrIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ShoppingIcon = styled.span`
  width: 24px;
  height: 24px;
`
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`
