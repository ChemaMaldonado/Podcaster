import { useEffect, useState } from 'react'

import { PodcastDetailCard } from '../../components'
import { fetchPodcastsDetails } from '../../services/api'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

export const Episode = () => {
  const location = useLocation()
  const podcastId = location.pathname.split('/')[2]
  const episodeId = location.pathname.split('/')[4]
  const { data } = useQuery(['podcast-id', podcastId], async () => await fetchPodcastsDetails(podcastId), { onError: (error) => console.error(error) })

  const episodeDetails = data?.results?.filter(episode => (episode.trackId).toString() === episodeId.toString())[0]
  const [trackSrc, setTrackSrc] = useState(episodeDetails?.previewUrl)
  useEffect(() => { setTrackSrc(episodeDetails?.previewUrl) }, [episodeDetails])

  return (
    <div className='w-full mt-10 flex-col xl:flex xl:flex-row justify-between space-y-10 xl:space-y-0 xl:space-x-10 px-10 xl:px-0 mb-5'>
      <div className='w-full xl:w-auto h-full shadow-xl border border-slate-200 rounded-md pt-5'>
        <PodcastDetailCard id={podcastId} />
      </div>
      <div className='w-full xl:w-3/4 h-full'>
        <div className='w-full shadow-lg p-3 border border-slate-200 rounded-md'>
          <p className='font-bold text-2xl'>{episodeDetails?.trackName}</p>
          <textarea className='w-full h-64 overflow-auto italic text-sm mt-5 text-slate-400 font-bold' defaultValue={episodeDetails?.description} />
          <audio id='audioId' controls className='w-full mt-5'>
            {episodeDetails?.previewUrl && <source src={trackSrc} type='audio/ogg' />}
          </audio>
        </div>
      </div>
    </div>
  )
}
