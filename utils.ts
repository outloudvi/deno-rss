import { Router } from 'oak'
import { Feeder } from './types.ts'

export function createJsonResponse(ctx: any, obj: any) {
  ctx.response.body = JSON.stringify(obj)
  const hdr = new Headers()
  hdr.set('Content-Type', 'application/json')
  ctx.response.headers = hdr
}

export function activateFeed(router: Router, feeder: Feeder) {
  const path = feeder.path.replace(/^\//, '').replace(/\/$/, '')
  const basePath = `/${path}`
  const atomPath = `${basePath}/atom.xml`
  const jsonPath = `${basePath}/rss.json`
  const rss2Path = `${basePath}/rss2.xml`

  const { title, description } = feeder
  const meta = {
    title,
    description,
    path: '/' + path,
    formats: {
      atom: atomPath,
      json: jsonPath,
      rss2: rss2Path,
    },
  }

  router.get(`/${path}/`, (ctx: any) => {
    createJsonResponse(ctx, meta)
  })

  router.get(`/${path}`, (ctx: any) => {
    createJsonResponse(ctx, meta)
  })

  router.get(atomPath, async (ctx: any) => {
    const feed = await feeder.getFeed()
    ctx.response.body = feed.atom1()
    const hdr = new Headers()
    hdr.set('Content-Type', 'application/atom+xml')
    ctx.response.headers = hdr
  })

  router.get(jsonPath, async (ctx: any) => {
    const feed = await feeder.getFeed()
    ctx.response.body = feed.json1()
    const hdr = new Headers()
    hdr.set('Content-Type', 'application/json')
    ctx.response.headers = hdr
  })

  router.get(rss2Path, async (ctx: any) => {
    const feed = await feeder.getFeed()
    ctx.response.body = feed.rss2()
    const hdr = new Headers()
    hdr.set('Content-Type', 'application/rss+xml')
    ctx.response.headers = hdr
  })
}

export function proxyFeed(router: Router, path: string, url: string) {
  router.get(`${path}`, async (ctx: any) => {
    const resp = await fetch(url)
    ctx.response.body = await resp.text()
    const hdr = new Headers()
    const originalCT = resp.headers.get('Content-Type')
    if (originalCT) {
      hdr.set('Content-Type', originalCT)
    }
    ctx.response.headers = hdr
  })
}
