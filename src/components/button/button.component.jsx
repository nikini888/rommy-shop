import {
  ButtonBase,
  ButtonGoogleSignIn,
  ButtonInverted,
} from './button.style.jsx'
export const BUTTON_TYPE_CLASS = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getStyleButton = (buttonStyle = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: ButtonBase,
    [BUTTON_TYPE_CLASS.google]: ButtonGoogleSignIn,
    [BUTTON_TYPE_CLASS.inverted]: ButtonInverted,
  }[buttonStyle])

const Button = ({ children, buttonType, ...options }) => {
  const CustomButton = getStyleButton(buttonType)
  return <CustomButton {...options}>{children}</CustomButton>
}

export default Button
