const Router = require('@koa/router')
const router = new Router()
const axios = require('axios')

// 비구조화 할당을 통하여 process.env 내부 값에 대한 레퍼런스 만들기
require('dotenv').config()
const { SK } = process.env

// recent dogs
router.get('/dog', async ctx => {
  const { data } = await axios.get(`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upkind=417000&pageNo=${ctx.query.page}&ServiceKey=${SK}`)
  ctx.body = {
    recentList: data.response.body.items.item,
    totalCount: data.response.body.totalCount
  }
})

// recent cats
router.get('/cat', async ctx => {
  const { data } = await axios.get(`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upkind=422400&pageNo=${ctx.query.page}&ServiceKey=${SK}`)
  ctx.body = {
    recentList: data.response.body.items.item,
    totalCount: data.response.body.totalCount
  }
})

// recent other animals
router.get('/others', async ctx => {
  const { data } = await axios.get(`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upkind=429900&pageNo=${ctx.query.page}&ServiceKey=${SK}`)
  ctx.body = {
    recentList: data.response.body.items.item,
    totalCount: data.response.body.totalCount
  }
})

// recent all animals
router.get('/all', async ctx => {
  const { data } = await axios.get(`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?pageNo=${ctx.query.page}&ServiceKey=${SK}`)
  ctx.body = {
    recentList: data.response.body.items.item,
    totalCount: data.response.body.totalCount
  }
})

module.exports = router
