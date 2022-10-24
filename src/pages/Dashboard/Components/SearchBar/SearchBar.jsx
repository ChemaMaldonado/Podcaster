import PropTypes from 'prop-types'

export const SearchBar = ({ podCastNumber = 0, setQuery }) => {
  return (
    <div className='w-full flex justify-center lg:justify-end items-center space-x-5 mt-5'>
      <span className='bg-blue-400 text-white py-1 px-2 rounded-md'>{podCastNumber}</span>
      <input type='text' onChange={setQuery} className='w-full lg:w-1/3 border border-gray-400 h-10 rounded-md px-5' placeholder='Search by artist or title...' />
    </div>
  )
}

SearchBar.propTypes = {
  podCastNumber: PropTypes.number,
  setQuery: PropTypes.func
}
