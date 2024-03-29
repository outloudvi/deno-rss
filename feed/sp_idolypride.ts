import { Feed } from 'feed'
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
  '4VCkdDHY5EnvQr1LYaU8Yi', // 3X

  // Special groups
  '5Iar32JdumnOgLlFkvV4AQ', // Pajapa

  // SunnyP individuals
  '4OkbwGMGFV6ChUxL14luUu', // Sakura
  '3b9DZqVwDJMf1EZMBuwCfS', // Shizuku
  '4quDTocMYykJJdlNel42CN', // Haruko
  '404mRNpw6IAAOkZEQelG7h', // Chisa
  '1puTfLWQAG8GywlnbfAqqf', // Rei
  // Tsuki individuals
  '5aNqOgJHJBWVzP4lrNaxj0', // Kotono
  '6HE4UPwPeNGPIAWwJrUqNo', // Mei
  '3AY3Od0q6MxEEtQz8aL47j', // Saki
  '1QYe6G41g1UUzmTYKftAYW', // Nagisa
  '1TOlJfpMGOsydkG3P0IrZH', // Suzu
  // TAiLE individuals
  '6pza5RAOaUduGRWBygnakK', // Rui
  '1TB1EtuGKM4i43x00QmOAY', // Sumire
  '095iRSpFVBYWsZsdcu2QEg', // Yu
  // LN individuals
  '0iM1XJj7tUAXVDTafkUWye', // Rio
  '5EZfgiTJTETidiUp80IrDv', // Aoi
  '6Iif6YKWM1m3OYhCuY5lub', // Kokoro
  '4kCRcANl6XK6R5kzGAUSah', // Ai
  // 3X individuals
  '42dGlJ4TYrtWXVLc8b1s8l', // fran
  '28svFZj099uC7EHHkkU3R3', // kana
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
