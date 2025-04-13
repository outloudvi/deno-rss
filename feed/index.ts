import { Feeder } from '../types.ts'
import sample from './sample.ts'
import idolypride from './idolypride.ts'
import sp_denonbu from './sp_denonbu.ts'
import sfti from './sfti.ts'
import qaengblog from './qaengblog.ts'

const _: Feeder[] = [sample, idolypride, sp_denonbu, sfti, qaengblog]

export const Proxies = {
  '/cloudflare': 'https://blog.cloudflare.com/rss/',
}

export default _
