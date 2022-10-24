import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { paths } from './paths'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Dashboard />} />
    </Routes>
  )
}
