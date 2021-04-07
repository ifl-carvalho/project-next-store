import { useContext } from 'react'
import { CategoriesContext, CategoryData } from '../contexts/CategoriesContext'

export function useCategories(): CategoryData[] {
  const context = useContext(CategoriesContext).categoryList

  return context
}

export function useSetCategories(): (categories: CategoryData[]) => void {
  const context = useContext(CategoriesContext).setCategoryList

  return context
}
