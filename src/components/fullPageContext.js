import { createContext, useContext } from 'react'

export const FullPageContext = createContext(null)

export function useFullPage() {
  const ctx = useContext(FullPageContext)
  if (!ctx) {
    throw new Error('useFullPage deve ser usado dentro de FullPage')
  }
  return ctx
}
