export const fetchPodcasts = async () => {
  const res = await
  fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .catch(error => console.error('There was an error fetching podcasts', error))
  return await res.json()
}
