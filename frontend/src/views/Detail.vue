<template>
  <v-container>

    <v-row>
      <v-col>
        <v-card max-width="400" class="mx-auto">
          <v-img :src="this.$route.params.info.popfile" :contain="fullImageSwitch" max-height="435">
            <v-row>
              <v-spacer/>
              <v-card-title>
                <v-switch v-model="fullImageSwitch"/>
              </v-card-title>
            </v-row>
          </v-img>

          <v-list two-line>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-music-accidental-sharp</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.desertionNo }}</v-list-item-title>
                <v-list-item-subtitle>유기번호</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset/>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">{{ this.$route.params.info.kindCd.slice(1, this.$route.params.info.kindCd.indexOf(']')) === '개' ? 'mdi-dog' : this.$route.params.info.kindCd.slice(1, this.$route.params.info.kindCd.indexOf(']')) === '고양이' ? 'mdi-cat' : 'mdi-cow' }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.kindCd }}</v-list-item-title>
                <v-list-item-subtitle>품종</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action/>
              <v-list-item-content>
                <div class="text-left">
                  <v-chip class="ma-2">{{ this.$route.params.info.colorCd }}</v-chip>
                  <v-chip class="ma-2">{{ this.$route.params.info.age }}</v-chip>
                  <v-chip class="ma-2">{{ this.$route.params.info.weight }}</v-chip>
                  <v-chip class="ma-2">{{ this.$route.params.info.sexCd === 'M' ? '수컷' : '암컷' }}</v-chip>
                  <v-chip class="ma-2" v-if="this.$route.params.info.neuterYn === 'Y'">중성화</v-chip>
                  <v-chip class="ma-2">{{ this.$route.params.info.specialMark }}</v-chip>
                  <v-chip class="ma-2">{{ this.$route.params.info.processState }}</v-chip>
                </div>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset/>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.happenDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') }}</v-list-item-title>
                <v-list-item-subtitle>발견 날짜</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset/>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.happenPlace }}</v-list-item-title>
                <v-list-item-subtitle>발견 장소</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action/>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.careAddr }}</v-list-item-title>
                <v-list-item-subtitle>보호 장소</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon :href="`https://map.naver.com/v5/search/${this.$route.params.info.careAddr}`" target="_blank">
                  <v-icon color="grey lighten-1">mdi-crosshairs-gps</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider inset/>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.careTel }}</v-list-item-title>
                <v-list-item-subtitle>보호소 전화번호</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action/>
              <v-list-item-content>
                <v-list-item-title>{{ this.$route.params.info.officetel }}</v-list-item-title>
                <v-list-item-subtitle>담당자 연락처</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style>

</style>
