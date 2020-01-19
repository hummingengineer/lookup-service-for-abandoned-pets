<template>
  <div>
    <v-row v-for="(item, i) in recentList" :key="i">
      <v-col>
        <v-card :to="{ name: 'detail', params: { info: item } }" class="d-sm-flex d-md-flex d-lg-flex d-xl-flex text-center text-sm-left text-md-left text-lg-left text-xl-left" hover>
          <v-avatar class="ma-2" size="160" tile>
            <v-img :src="item.filename"/>
          </v-avatar>
          <div>
            <v-card-title class="justify-center justify-sm-start justify-md-start justify-lg-start justify-xl-start">유기번호 {{ item.desertionNo }}</v-card-title>
            <v-card-subtitle>
              발견장소: {{ item.happenPlace }}<br/>
              품종: {{ item.kindCd }}<br/>
              색상: {{ item.colorCd }}<br/>
              성별: {{ item.sexCd === 'M' ? '수컷' : '암컷' }}<br/>
              특징: {{ item.specialMark }}
            </v-card-subtitle>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['recentList']
}
</script>

<style>

</style>
