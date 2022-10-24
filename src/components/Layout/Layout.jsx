import { NavBar } from './Components'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      <NavBar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}
