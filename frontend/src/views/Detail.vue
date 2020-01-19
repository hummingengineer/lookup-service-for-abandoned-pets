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
