/**
 * Retrieve the list of the 100th most listened podcasts in the us.
 *
 * @return {Object<Podcasts>}
 */
export const fetchPodcasts = async () => {
  const res = await
  fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .catch(error => console.error('There was an error fetching podcasts', error))
  return await res.json()
}

/**
 * Retrieves the details from an specific podcast.
 *
 * @param id
 * @return {Promise<Podcast>}
 */
export const fetchPodcastsDetails = async (id) => {
  const req = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`)}`).catch(error => console.error('There was an error fetching podcast detail', error))
  const data = await req.json()
  return JSON.parse(data.contents)
}
