import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Episode } from '../pages/Episode/Episode'
import { Podcast } from '../pages/Podcast'
import { paths } from './paths'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Dashboard />} />
      <Route path={paths.PODCAST} element={<Podcast />} />
      <Route path={paths.EPISODE} element={<Episode />} />
    </Routes>
  )
}
