import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../utils/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await creatUserDocumentFromAuth(user)
  }
  return (
    <div className="">
      <h3>Sign in</h3>
      <button onClick={logGoogleUser}>Sign in with Goole</button>
      <SignUpForm />
    </div>
  )
}
export default SignIn
