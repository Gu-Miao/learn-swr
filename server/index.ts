import Koa from 'koa'

const app = new Koa()
const port = 8888

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
