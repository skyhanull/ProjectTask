import axios from 'axios'

const getInfo = async () => {
  const response = await axios(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
  )

  if (response.status === 200) {
    const { data } = response
    return data.feed
  }
  return null
}

export default getInfo
