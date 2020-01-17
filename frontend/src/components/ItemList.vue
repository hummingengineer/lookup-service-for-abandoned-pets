<template>
  <div>
    <v-row v-for="(item, i) in recentList" :key="i">
      <v-col>
        <v-card hover>
          <v-avatar size="125" tile>
            <v-img :src="item.filename" ></v-img>
          </v-avatar>
          <v-card-title>유기번호 {{ item.desertionNo }}</v-card-title>
          <v-card-subtitle>
            발견장소: {{ item.happenPlace }}<br />
            품종: {{ item.kindCd }}<br />
            색상: {{ item.colorCd }}<br />
            성별: {{ item.sexCd === 'M' ? '수컷' : '암컷' }}<br />
            특징: {{ item.specialMark }}
          </v-card-subtitle>
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
