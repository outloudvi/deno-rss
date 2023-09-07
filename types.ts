import { Feed } from 'feed'

export interface Feeder {
  title: string
  description: string
  path: string
  getFeed(): Promise<Feed>
}
