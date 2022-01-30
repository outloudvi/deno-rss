import cheerio from '../deps/cheerio.ts'
import Feed from '../deps/feed.ts'
import { Feeder } from '../types.ts'
import dayjs from 'https://cdn.skypack.dev/dayjs@1.10.7?dts'
import dayjsUtc from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/utc?dts'
import dayjsCPF from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/customParseFormat?dts'
import { USER_AGENT } from '../const.ts'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsCPF)

const id = 'idoly-pride-news'
const title = 'IDOLY PRIDE News'
const path = 'idolypride'
const description = 'First page of https://idolypride.jp/news/'

const baseurl = 'https://idolypride.jp/news/'

const _: Feeder = {
  title,
  path,
  description,
  // deno-lint-ignore require-await
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      link: 'https://idolypride.jp/news/',
      copyright: '© 2019 Project IDOLY PRIDE',
    })

    const html = await fetch(baseurl, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    }).then((x) => x.text())
    const $ = cheerio.load(html)
    const links = $('#listsList a')
    links.map((_, item) => {
      const imagePath = $('.lists__list__img', item)
        .css('background-image')
        .replace(/^url\(["']/, '')
        .replace(/["']\)$/, '')
      const imageUrl = new URL(imagePath, baseurl)
      const linkPath = $(item).attr('href')!
      const linkUrl = new URL(linkPath, baseurl)
      // @ts-ignore: dayjs.utc exists
      const date = dayjs.utc(
        $('.lists__list__specs__date', item).text(),
        'YYYY.MM.DD'
      )
      feed.addItem({
        title: $('.lists__list__text', item).text(),
        // convert to JST
        date: date.subtract(9, 'hour').toDate(),
        category: [{ name: $('.lists__list__specs__cat', item).text() }],
        link: String(linkUrl),
        image: String(imageUrl),
      })
    })
    return feed
  },
}

export default _
