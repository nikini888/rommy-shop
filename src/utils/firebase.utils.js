import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGZTXJT5e3fBEhF9dbSvRmJ5TY-nLp-Z0',
  authDomain: 'rommy-shop.firebaseapp.com',
  projectId: 'rommy-shop',
  storageBucket: 'rommy-shop.appspot.com',
  messagingSenderId: '80471848007',
  appId: '1:80471848007:web:f41178d054c77f80e56d62',
}

const firebaseApp = initializeApp(firebaseConfig)

export const createCollectionAndDocument = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  objects.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase())
    batch.set(docRef, item)
  })

  await batch.commit()
  console.log('finish')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()

    acc[title.toLowerCase()] = items

    return acc
  }, {})
  return categoryMap
}

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  promt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const creatUserDocumentFromAuth = async (userAuth, additional = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additional,
      })
    } catch (error) {
      console.log('🤖🤖🤖 Error creating the user.', error.message)
    }
  }
  return userDocRef
}
export const signInWithForm = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
export const creatAuthUseWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return
  onAuthStateChanged(auth, callback)
}
