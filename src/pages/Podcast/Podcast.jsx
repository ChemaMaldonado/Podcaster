import { Loading, PodcastDetailCard } from '../../components'

import { EpisodesTable } from './components/EpisodesTable'
import { fetchPodcastsDetails } from '../../services/api'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

export const Podcast = () => {
  const location = useLocation()
  const podcastId = location.pathname.split('/')[2]

  const { data, isLoading } = useQuery(['podcast-id', podcastId], async () => await fetchPodcastsDetails(podcastId), { onError: (error) => console.error(error) })

  return (
    <div className='w-full mt-10 flex-col xl:flex xl:flex-row justify-between space-y-10 xl:space-y-0 xl:space-x-10 px-10 xl:px-0'>
      <div className='w-full xl:w-auto h-full shadow-xl border border-slate-200 rounded-md pt-5'>
        <PodcastDetailCard id={podcastId} />
      </div>
      <div className='w-full xl:w-2/3 h-full pb-3'>
        <div className='w-full shadow-lg p-3 border border-slate-200 rounded-md'>
          <p className='font-mono font-bold text-lg'>Episodes: <span>{isLoading ? '...' : data?.resultCount}</span></p>
        </div>
        {isLoading ? <Loading /> : <EpisodesTable episodes={data?.results} />}
      </div>
    </div>
  )
}
