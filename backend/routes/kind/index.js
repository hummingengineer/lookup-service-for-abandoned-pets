const Router = require('@koa/router')
const router = new Router()
const axios = require('axios')

// 비구조화 할당을 통하여 process.env 내부 값에 대한 레퍼런스 만들기
require('dotenv').config()
const { SK } = process.env

// kindItems
router.get('/', async ctx => {
  const { data } = await axios.get(`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/kind?up_kind_cd=${ctx.query.up_kind_cd}&ServiceKey=${SK}`)
  ctx.body = data.response.body.items.item
})

module.exports = router
