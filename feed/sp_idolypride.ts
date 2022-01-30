import Feed from '../deps/feed.ts'
import { Feeder } from '../types.ts'
import { buildSpotifyArtistAlbums } from './_spotify.ts'

const id = 'spot-idolypride'
const title = 'IDOLY PRIDE Spotify Playlist'
const path = 'sp/idolypride'
const description = 'Composed Spotify playlist for IDOLY PRIDE'

const ARTIST_IDS = [
  '1FkWBu03NKQiM8mQxNomGU', // SunnyP
  '38BEPonA0AsFtTG9FefT9o', // Tsuki
  '6k9TBCxyr4bXwZ8Y21Kwn1', // TAiLE
  '31zCA3lKnObwtGBbDNnNAt', // LN
  '1qu8WIATG5KzozEzjmDkx7', // Hoshimi

  // SunnyP individuals
  '4OkbwGMGFV6ChUxL14luUu', // Sakura
  // Tsuki individuals
  '5aNqOgJHJBWVzP4lrNaxj0', // Kotono
  '1puTfLWQAG8GywlnbfAqqf', // Rei
  // LN individuals
  '0iM1XJj7tUAXVDTafkUWye', // Rio
]

const _: Feeder = {
  title,
  path,
  description,
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      copyright: 'Copyright (c) Spotify & IDOLY PRIDE',
    })
    await buildSpotifyArtistAlbums(ARTIST_IDS, feed)
    return feed
  },
}

export default _
