import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import { Feeder } from '../types.ts'
import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc.js'
import dayjsCPF from 'dayjs/plugin/customParseFormat.js'
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
        ?.replace(/^url\(["']/, '')
        ?.replace(/["']\)$/, '')
      if (!imagePath) return

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
