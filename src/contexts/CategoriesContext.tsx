import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'

export interface CategoryData {
  id: number
  name: string
  images: Array<ImageData>
  tags: Array<TagData>
}

export interface ImageData {
  id: number
  url: string
}

export interface TagData {
  id: string
  name: string
}

export interface CategoriesProviderProps {
  children: ReactNode
  categoriesData: CategoryData[]
}

export interface CategoriesContextData {
  categoryList: CategoryData[]
  setCategoryList: (categories: CategoryData[]) => void
}

export const CategoriesContext = createContext({} as CategoriesContextData)

export const CategoriesProvider: NextPage<CategoriesProviderProps> = function ({
  children,
  categoriesData,
}) {
  const setCategoryList = (categoriesData: CategoryData[]): void => {
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
