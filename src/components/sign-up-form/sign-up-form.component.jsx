import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { Container } from './sign-up-form-style.jsx'

import {
  creatAuthUseWithEmailAndPassword,
  creatUserDocumentFromAuth,
} from '../../utils/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPass: '',
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPass } = formFields

  const resetFormFields = () => {
    setFormFields({ ...defaultFormFields })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPass) {
      alert('Password do not match')
      return
    }
    try {
      const { user } = await creatAuthUseWithEmailAndPassword(email, password)
      await creatUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        alert('Cannot creat user, email or password invalid')
      }
      if (error.code === 'email-already-in-use') {
        alert('Cannot creat user, email already in use')
      } else {
        console.log('🤖🤖🤖 User creation encountered an error!', error)
      }
    }
  }
  return (
    <Container>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOption={{
            type: 'text',
            name: 'displayName',
            id: 'displayName',
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Email"
          inputOption={{
            type: 'email',
            name: 'email',
            id: 'email',
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOption={{
            type: 'password',
            name: 'password',
            id: 'password',
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Confirm password"
          inputOption={{
            type: 'password',
            name: 'confirmPass',
            id: 'confirmPass',
            value: confirmPass,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </Container>
  )
}
export default SignUpForm
