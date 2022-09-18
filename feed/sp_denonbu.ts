import Feed from '../deps/feed.ts'
import { Feeder } from '../types.ts'
import { buildSpotifyPlaylist } from './_spotify.ts'

const id = 'spot-denonbu'
const title = 'DENONBU Spotify Playlist'
const path = 'sp/denonbu'
const description = 'Spotify playlist of DENONBU'

const PLAYLIST_ID = '31s7OlRyx4YBvQpn57aF5c'

const _: Feeder = {
  title,
  path,
  description,
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      copyright: 'Copyright (c) Spotify & Denonbu',
      link: `https://open.spotify.com/playlist/${PLAYLIST_ID}`,
    })
    await buildSpotifyPlaylist(PLAYLIST_ID, feed)
    return feed
  },
}

export default _
