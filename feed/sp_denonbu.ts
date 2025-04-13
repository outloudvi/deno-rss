import { Feed } from 'feed'
import { Feeder } from '../types.ts'
import sp from '../helpers/spotify.ts'

const id = 'spot-denonbu'
const title = 'DENONBU Spotify Playlist'
const path = 'sp/denonbu'
const description = 'Spotify playlist of DENONBU'

const PLAYLIST_ID = '37i9dQZF1DWTtcnE4xlCDS'

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
    await sp.buildSpotifyPlaylist(PLAYLIST_ID, feed)
    return feed
  },
}

export default _
