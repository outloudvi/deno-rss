import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import { Feeder } from '../types.ts'
import dayjs from 'https://cdn.skypack.dev/dayjs@1.10.7?dts'
import dayjsUtc from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/utc?dts'
import dayjsCPF from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/customParseFormat?dts'
import { USER_AGENT } from '../const.ts'
import { pickOneFromSrcSet } from '../utils.ts'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsCPF)

const id = 'qa-eng-blog'
const title = 'QualiArts Engineering Blog'
const path = 'qaengblog'
const description =
  '株式会社QualiArts（クオリアーツ）のエンジニアブログです。社内で使われている様々な技術の知見をエンジニアが紹介。毎月1回更新しています。'

const baseurl = 'https://technote.qualiarts.jp/'

const _: Feeder = {
  title,
  path,
  description,
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      link: baseurl,
      copyright: '© QualiArts, Inc.',
    })

    const html = await fetch(baseurl, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    }).then((x) => x.text())
    const $ = cheerio.load(html)
    const links = $('main article')
    links.map((_, item) => {
      const imgSrc = $('picture source', item)
      const imagePath = pickOneFromSrcSet(
        imgSrc.attr('srcSet') ?? imgSrc.attr('data-srcset')!
      )
      const imageUrl = new URL(imagePath, baseurl)
      const linkPath = $('a', item).attr('href')!
      const linkUrl = new URL(linkPath, baseurl)
      // @ts-ignore: dayjs.utc exists
      const date = dayjs.utc($('time', item).attr('datetime'))
      feed.addItem({
        title: $('h3 a', item).text(),
        // convert to JST
        date: date.toDate(),
        category: $('ul li', item)
          .map((_, x) => ({
            name: $('span', x).text()!,
          }))
          .get(),
        link: String(linkUrl),
        image: String(imageUrl),
      })
    })
    return feed
  },
}

export default _
