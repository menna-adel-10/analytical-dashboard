import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-above-molly-32535.upstash.io',
  token: process.env.REDIS_KEY!,
})

