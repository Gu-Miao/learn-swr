import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()
const port = 8888

router.get('/api1', async ctx => {
  ctx.body = 1111
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
