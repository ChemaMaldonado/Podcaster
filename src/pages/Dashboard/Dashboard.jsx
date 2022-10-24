import { Loading } from '../../components'
import { PodcastCard } from './Components'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { fetchPodcasts } from '../../services/api'
import { useQuery } from 'react-query'
import { useState } from 'react'

export const Dashboard = () => {
  const [query, setQuery] = useState()
  const { data: podcasts, isLoading } = useQuery(['podcasts'], fetchPodcasts, { onError: (error) => console.error(error) })

  const filterPodcasts = (podcast) => {
    if (query !== undefined) {
      return ((podcast['im:name'].label).toLowerCase().includes((query?.target.value).toLowerCase()) ||
      (podcast['im:artist'].label).toLowerCase().includes((query?.target.value).toLowerCase()))
    }
    return podcast
  }
  const filteredPodcastNumber = podcasts?.feed?.entry?.filter(filterPodcasts).length
  return (
    <div className='px-10'>
      <SearchBar podCastNumber={filteredPodcastNumber} setQuery={setQuery} />
      {isLoading
        ? <Loading />
        : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2'>
            {podcasts?.feed?.entry.filter(filterPodcasts)
              .map((item) => {
                return (
                  <div key={item.id.attributes['im:id']}>
                    <PodcastCard
                      title={item['im:name'].label}
                      author={item['im:artist'].label}
                      image={item['im:image'][0].label}
                      id={item.id.attributes['im:id']}
                    />
                  </div>
                )
              })}
          </div>
          )}
    </div>
  )
}
