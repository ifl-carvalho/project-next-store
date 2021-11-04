import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'
import { Category } from '../types/api'

export interface CategoriesContextData {
  categoryList: Category[]
  setCategoryList: (categories: Category[]) => void
}

interface CategoriesProviderProps {
  children: ReactNode
  categoriesData: Category[]
}

export const CategoriesContext = createContext({} as CategoriesContextData)

export const CategoriesProvider: NextPage<CategoriesProviderProps> = function ({
  children,
  categoriesData,
}) {
  const setCategoryList = (categoriesData: Category[]): void => {
    setCategoryListState({ ...categoryListState, categoryList: categoriesData })
  }

  const [categoryListState, setCategoryListState] = useState({
    categoryList: categoriesData,
    setCategoryList: setCategoryList,
  })

  return (
    <CategoriesContext.Provider value={categoryListState}>{children}</CategoriesContext.Provider>
  )
}
