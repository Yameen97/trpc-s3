import { createRouter } from './context'
import superjson from 'superjson'
import { chatsRouter } from './chats-router'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('msg.', chatsRouter)


export type AppRouter = typeof appRouter
