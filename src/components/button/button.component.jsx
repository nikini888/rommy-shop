import './button.style.scss'

const BUTTON_TYPE_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...options }) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASS[buttonType] : ''
      }`}
      {...options}
    >
      {children}
    </button>
  )
}

export default Button
