import { Application, Router } from './deps/oak.ts'
import feeds from './feed/index.ts'
import { activateFeed, createJsonResponse } from './utils.ts'

const router = new Router()
for (const feed of feeds) {
  activateFeed(router, feed)
}
router.get('/', (ctx) => {
  const meta = {
    title: 'deno-rss',
    availableSources: feeds.map(({ title, description, path }) => ({
      title,
      description,
      path: `/${path}`,
    })),
  }
  createJsonResponse(ctx, meta)
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', (e) => {
  console.log('Server is up')
  console.log(`Feeds added: \n${feeds.map((x) => x.title).join('\n')}`)
})
await app.listen({ port: 8080 })
