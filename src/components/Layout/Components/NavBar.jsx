import { Link } from 'react-router-dom'
import { paths } from '../../../routes/paths'

export const NavBar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='flex justify-between items-center px-10 pb-5 border-b border-b-gray-200'>
        <Link to={paths.HOME} onClick={() => window.scrollTo(0, 0)} className='text-blue-400 font-mono font-bold'>PodCaster</Link>
        <button className='h-5 w-5 rounded-full bg-white' />
      </div>
    </div>
  )
}
