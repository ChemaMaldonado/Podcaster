import { NAVIGATION_MARKER_ACTIVE, NAVIGATION_MARKER_INACTIVE } from '../../../constants/constants'

export const NavigationReducer = (state, action) => {
  switch (action.type) {
    case 'routesChanged':
      return {
        pathName: action.payload.pathName,
        color: NAVIGATION_MARKER_ACTIVE
      }
    case 'routesMaintained':
      return {
        ...state,
        color: NAVIGATION_MARKER_INACTIVE
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
