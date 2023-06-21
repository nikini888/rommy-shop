import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../utils/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await creatUserDocumentFromAuth(user)
  }
  return (
    <div className="">
      <h3>Sign in</h3>
      <button onClick={logGoogleUser}>Sign in with Goole</button>
    </div>
  )
}
export default SignIn
