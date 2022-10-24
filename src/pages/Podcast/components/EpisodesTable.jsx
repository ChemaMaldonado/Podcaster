import { convertMsToMinutesSeconds, formatDate } from '../../../utils/utils'
import { useLocation, useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

export const EpisodesTable = ({ episodes }) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className='w-full shadow-lg pt-10 h-full'>
      <div className='w-full'>
        <div className='h-[550px] overflow-auto border rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-slate-200 sticky top-0'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Duration
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Date
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                >
                  Title
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {episodes?.filter((_, key) => key !== 0).map((episode, key) => (
                <tr
                  key={episode.trackId}
                  onClick={() => navigate(`${location.pathname}/episode/${episode.trackId}`)}
                  className={`${(key % 2) !== 0 ? 'bg-slate-100' : ''} cursor-pointer`}
                >
                  <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    {episode.trackTimeMillis ? convertMsToMinutesSeconds(episode.trackTimeMillis) : '--:--'}
                  </td>
                  <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    {formatDate(new Date(episode.releaseDate))}
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                    {episode.trackName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

EpisodesTable.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      trackId: PropTypes.number,
      trackName: PropTypes.string,
      trackTimeMillis: PropTypes.number,
      releaseDate: PropTypes.string
    }))
}
