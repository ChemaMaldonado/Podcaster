import { NavigationDispatch, NavigationState } from './state'

import { NAVIGATION_MARKER_INACTIVE } from '../../../constants/constants'
import { NavigationReducer } from './reducer'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const NavigationProvider = ({ children }) => {
  const location = useLocation()
  const [state, dispatch] = React.useReducer(NavigationReducer, {
    pathName: '/',
    color: NAVIGATION_MARKER_INACTIVE
  })

  /*
    This will handle every route change. As it is an SPA changes
    happen so fast so I addded a timeout in order to make the marker
    visible for the human eye.
  */

  React.useEffect(() => {
    if (state.pathName && (state.pathName !== location.pathname)) {
      return dispatch({ type: 'routesChanged', payload: { pathName: location.pathname } })
    }
    setTimeout(() => {
      return dispatch({ type: 'routesMaintained' })
    }, 250)
  }, [location, state.pathName])

  return (
    <NavigationState.Provider value={state}>
      <NavigationDispatch.Provider value={dispatch}>
        {children}
      </NavigationDispatch.Provider>
    </NavigationState.Provider>
  )
}
