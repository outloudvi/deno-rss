import { USER_AGENT } from '../const.ts'
import Feed from '../deps/feed.ts'
import { getPublicSpotifyToken } from '../helpers/spotify.ts'

export async function buildSpotifyPlaylist(playlistId: string, feed: Feed) {
  const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`
  const SPOTIFY_APIKEY = await getPublicSpotifyToken(playlistUrl)

  const data = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=0&limit=100&additional_types=track%2Cepisode&market=JP`,
    {
      headers: {
        Accept: 'application/json',
        'app-platform': 'WebPlayer',
        authorization: `Bearer ${SPOTIFY_APIKEY}`,
        'spotify-app-version': '1.1.79.76.g361921df',
        Referer: 'https://open.spotify.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'User-Agent': USER_AGENT,
      },
      method: 'GET',
    }
  ).then((x) => x.json())

  for (const i of data.items) {
    const track = i.track
    feed.addItem({
      id: track.id,
      title: `${track.name} by ${track.artists
        .map((x: any) => x.name)
        .join(', ')}`,
      date: new Date(track.album.release_date),
      link: track.external_urls.spotify,
      description: `New release by ${track.artists
        .map((x: any) => x.name)
        .join(', ')}: "${track.name}" on "${track.album.name}"`,
      author: track.artists.map((x: any) => ({
        name: x.name,
      })),
      image: track.album.images[0].url,
    })
  }
}

async function getArtistAlbums(artistId: string, apiKey: string) {
  const data = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Accept: 'application/json',
        'app-platform': 'WebPlayer',
        authorization: `Bearer ${apiKey}`,
        'spotify-app-version': '1.1.79.76.g361921df',
        Referer: 'https://open.spotify.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'User-Agent': USER_AGENT,
      },
    }
  ).then((x) => x.json())

  return data.items || []
}

export async function buildSpotifyArtistAlbums(
  artistIds: string[],
  feed: Feed
) {
  if (artistIds.length === 0) return
  const playlistUrl = `https://open.spotify.com/artist/${artistIds[0]}`
  const SPOTIFY_APIKEY = await getPublicSpotifyToken(playlistUrl)

  const items = await Promise.all(
    artistIds.map((i) => getArtistAlbums(i, SPOTIFY_APIKEY))
  )

  console.log(items)

  const allAlbums = ([] as any[])
    .concat(...items)
    .sort(
      (a, b) =>
        Number(new Date(b.release_date)) - Number(new Date(a.release_date))
    )

  for (const i of allAlbums) {
    feed.addItem({
      title: i.name,
      author: i.artists.map((a: any) => a.name).join(', '),
      description: `"${i.name}" by ${i.artists
        .map((a: any) => a.name)
        .join(', ')}, released at ${i.release_date} with ${
        i.total_tracks
      } tracks.`,
      link: i.external_urls.spotify,
      date: new Date(i.release_date),
    })
  }
}
