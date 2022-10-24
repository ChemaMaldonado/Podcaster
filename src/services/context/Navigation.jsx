import React from 'react'
export const NavigationState = React.createContext()
export const NavigationDispatch = React.createContext()

const useNavigationState = () => {
  const context = React.useContext(NavigationState)
  if (context === undefined) {
    throw new Error('Navigation context must be used within a provider')
  }
  return context
}

const useNavigationDispatch = () => {
  const context = React.useContext(NavigationDispatch)
  if (context === undefined) {
    throw new Error('Navigation dispatch must be used within a provider')
  }
  return context
}

export { useNavigationState, useNavigationDispatch }
