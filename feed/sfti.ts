import cheerio from '../deps/cheerio.ts'
import Feed from '../deps/feed.ts'
import { Feeder } from '../types.ts'
import dayjs from 'https://cdn.skypack.dev/dayjs@1.10.7?dts'
import dayjsUtc from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/utc?dts'
import dayjsCPF from 'https://cdn.skypack.dev/dayjs@1.10.7/plugin/customParseFormat?dts'
import { USER_AGENT } from '../const.ts'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsCPF)

const baseurl = 'https://dbrgn.ch/stories-from-the-internet.html'

const id = 'stories-from-the-internet'
const title = 'Stories from the Internet'
const path = 'sfti'
const description = baseurl

const _: Feeder = {
  title,
  path,
  description,
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      link: baseurl,
    })

    const html = await fetch(baseurl, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    }).then((x) => x.text())
    const $ = cheerio.load(html)
    const links = $('ul > li')
    links.map((_, item) => {
      const linkPath = $('a', item).attr('href')!
      const linkUrl = new URL(linkPath, baseurl)
      // @ts-ignore: dayjs.utc exists
      feed.addItem({
        title: $('a', item).text(),
        link: String(linkUrl),
        id: String(linkUrl),
      })
    })
    return feed
  },
}

export default _
