import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase.utils'

export const CategoriesContext = createContext({
  categories: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({})
  useEffect(() => {
    const getCategoried = async () => {
      const getCategories = await getCategoriesAndDocuments()
      setCategories(getCategories)
    }
    getCategoried()
  }, [])
  const value = { categories }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
