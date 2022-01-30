import Feed from './deps/feed.ts'

export interface Feeder {
  title: string
  description: string
  path: string
  getFeed(): Promise<Feed>
}
