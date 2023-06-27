import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component'
import { useState } from 'react'

import {
  signInWithGooglePopup,
  signInWithForm,
} from '../../utils/firebase.utils'
import { Container, ButtonContainer } from './sign-in-form.style.jsx'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }
  const resetFormFields = () => {
    setFormFields({ ...defaultFormFields })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signInWithForm(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }
  return (
    <Container>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOption={{
            type: 'email',
            name: 'email',
            onChange: handleChange,
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="password"
          inputOption={{
            type: 'password',
            name: 'password',
            onChange: handleChange,
            value: password,
            required: true,
          }}
        />
        <ButtonContainer>
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASS.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign in with Goole
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  )
}

export default SignInForm
