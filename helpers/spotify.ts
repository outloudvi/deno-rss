import { USER_AGENT } from '../const.ts'
import * as cheerio from 'cheerio'

export async function getPublicSpotifyToken(url: string): Promise<string> {
  const html = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
    },
  }).then((x) => x.text())
  const $ = cheerio.load(html)
  const json = JSON.parse($('script#session').html()!)
  return json.accessToken
}
