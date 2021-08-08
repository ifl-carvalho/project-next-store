import { useContext } from 'react'
import { CategoriesContext, CategoriesContextData } from '../contexts/CategoriesContext'

export function useCategories(): CategoriesContextData {
  const context = useContext(CategoriesContext)

  return context
}
