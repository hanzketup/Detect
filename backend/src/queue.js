import PQueue from 'p-queue'
import process from './process'

const queue = new PQueue({concurrency: 1});

export default async (req) => {
  return await queue.add(async () => {
    return await process(req)
  })
}
