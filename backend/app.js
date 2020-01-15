const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router')
const router = new Router()

// 라우터 설정
router.use('/recent', require('./routes/recent/index').routes())

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Listening to port %d', 3000)
})
