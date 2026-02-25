import { Hono } from 'hono'
import zod, { email } from 'zod'

const app = new Hono()






app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
