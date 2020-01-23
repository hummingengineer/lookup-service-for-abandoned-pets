const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router')
const router = new Router()

const serve = require('koa-static')
app.use(serve(require('path').join(__dirname, '../', 'frontend', 'dist')))

// 라우터 설정
router.use('/recent', require('./routes/recent/index').routes())  // './routes/recent/index' 라우트를 /recent 경로 하위 라우트로 설정
router.use('/kind', require('./routes/kind/index').routes())
router.use('/sido', require('./routes/sido/index').routes())
router.use('/sigungu', require('./routes/sigungu/index').routes())

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Listening to port %d', 3000)
})
