import Feed from '../deps/feed.ts'
import { Feeder } from '../types.ts'

const id = 'sample-feed'
const title = 'Sample feed'
const path = 'sample'
const description = 'Sample feed for deno-rss'

const _: Feeder = {
  title,
  path,
  description,
  // deno-lint-ignore require-await
  getFeed: async () => {
    const feed = new Feed({
      id,
      title,
      copyright: 'CC0',
    })

    feed.addItem({
      title: 'Hello, world',
      link: 'https://deno.com/deploy',
      date: new Date(),
    })
    return feed
  },
}

export default _
