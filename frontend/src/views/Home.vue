<template>
  <v-container>

    <v-row>
      <v-col>
        <v-tabs v-model="tab" centered icons-and-text>
          <v-tab href="#dog">
            개
            <v-icon>mdi-dog</v-icon>
          </v-tab>
          <v-tab href="#cat">
            고양이
            <v-icon>mdi-cat</v-icon>
          </v-tab>
          <v-tab href="#others">
            기타 동물
            <v-icon>mdi-cow</v-icon>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <ItemList :recentList="recentList" />

    <v-pagination v-if="totalCount" v-model="page" class="my-2" :length="Math.ceil(totalCount/10)" total-visible="9" circle prev-icon="mdi-menu-left" next-icon="mdi-menu-right" />

    <Loading :loading="loading" />

  </v-container>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import Loading from '@/components/Loading.vue'
const axios = require('axios')

export default {
  name: 'home',

  components: {
    ItemList,
    Loading
  },

  data: function () {
    return {
      tab: 'dog',
      recentList: null,
      page: 1,
      totalCount: null,
      loading: false
    }
  },

  created: function () {
    this.recentReq()
  },

  watch: {
    tab: function () {
      this.page = 1
      this.recentReq()
    },
    page: function () {
      this.recentReq()
    }
  },

  methods: {
    recentReq: function () {
      this.loading = true
      axios.get(`recent/${this.tab}?page=${this.page}`).then(({ data }) => {
        if (!Array.isArray(data.recentList)) data.recentList = [data.recentList]
        this.recentList = data.recentList
        this.totalCount = data.totalCount
        this.loading = false
      })
    }
  }

}
</script>

<style>

</style>
