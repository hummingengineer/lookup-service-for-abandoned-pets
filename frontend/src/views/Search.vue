<template>
  <v-container>

    <v-row>
      <v-col>
        <v-checkbox v-model="dateCheckBox" class="mx-2" label="날짜 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="upkindCheckBox" class="mx-2" label="동물 선택"/>
      </v-col>
      <v-responsive v-if="$vuetify.breakpoint.xsOnly" width="100%"/>
      <v-col>
        <v-checkbox v-model="uprCheckBox" class="mx-2" label="시/도 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="neuterCheckBox" class="mx-2" label="중성화 여부 선택"/>
      </v-col>
    </v-row>

    <v-divider/>
    <v-divider class="mb-2"/>

    <v-row v-if="dateCheckBox">
      <v-col>
        <v-dialog ref="beginDialog" v-model="beginModal" :return-value.sync="beginDate" persistent width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="beginDate" label="검색 시작일" prepend-icon="mdi-calendar" readonly v-on="on"/>
          </template>
          <v-date-picker v-model="beginDate" scrollable locale="ko-KR" :max="`${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`">
            <v-spacer/>
            <v-btn text color="primary" @click="beginModal = false">취소</v-btn>
            <v-btn text color="primary" @click="$refs.beginDialog.save(beginDate)">확인</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col>
        <v-dialog ref="endDialog" v-model="endModal" :return-value.sync="endDate" persistent width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="endDate" label="검색 종료일" prepend-icon="mdi-calendar" readonly v-on="on"/>
          </template>
          <v-date-picker v-model="endDate" scrollable locale="ko-KR" :max="`${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`">
            <v-spacer/>
            <v-btn text color="primary" @click="endModal = false">취소</v-btn>
            <v-btn text color="primary" @click="$refs.endDialog.save(endDate)">확인</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row v-if="upkindCheckBox">
      <v-col>
        <p>동물 선택</p>
        <v-radio-group v-model="upkindRadioBtn" row>
          <v-radio label="개" value="417000"></v-radio>
          <v-radio label="고양이" value="422400"></v-radio>
          <v-radio label="기타 동물" value="429900"></v-radio>
        </v-radio-group>
        <v-checkbox v-if="upkindRadioBtn" v-model="kindCheckBox" label="품종 선택"/>
      </v-col>
    </v-row>

    <v-row v-if="upkindCheckBox && upkindRadioBtn && kindCheckBox">
      <v-col>
        <v-autocomplete v-model="kindItem" :items="kindItems" item-text="KNm" item-value="kindCd" label="품종 검색" no-data-text="검색 결과가 없습니다" outlined clearable/>
      </v-col>
    </v-row>

    <v-row v-if="uprCheckBox">
      <v-col>
        <p>시/도 선택</p>
        <v-autocomplete v-model="uprItem" :items="uprItems" item-text="orgdownNm" item-value="orgCd" label="시/도 검색" no-data-text="검색 결과가 없습니다" outlined clearable/>
        <v-checkbox v-if="uprItem" v-model="orgCheckBox" label="시/군/구 선택"/>
      </v-col>
    </v-row>

    <v-row v-if="uprCheckBox && uprItem && orgCheckBox">
      <v-col>
        <v-autocomplete v-model="orgItem" :items="orgItems" item-text="orgdownNm" item-value="orgCd" label="시/군/구 검색" no-data-text="검색 결과가 없습니다" outlined clearable/>
      </v-col>
    </v-row>

    <v-row v-if="neuterCheckBox">
      <v-col>
        <p>중성화 여부</p>
        <v-radio-group v-model="neuterRadioBtn" row>
          <v-radio label="전체" :value="0"></v-radio> <!-- null이라고 적으면 숫자 0으로 변환된다 -->
          <v-radio label="예" value="Y"></v-radio>
          <v-radio label="아니오" value="N"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <ItemList v-if="searchList" :ItemList="searchList"/>

    <v-row v-if="totalCount === 0" class="text-center">
      <v-col>
        검색 결과가 없습니다
      </v-col>
    </v-row>

    <v-pagination v-if="totalCount" v-model="page" class="my-2" :length="Math.ceil(totalCount/10)" total-visible="9" circle prev-icon="mdi-menu-left" next-icon="mdi-menu-right"/>

    <Loading :loading="loading"/>

    <v-btn v-if="dateCheckBox || upkindCheckBox || kindCheckBox || uprCheckBox || orgCheckBox || neuterCheckBox" fixed :x-large="$vuetify.breakpoint.name === 'xs' ? false : true" fab bottom right color="pink" dark @click="searchPet">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

  </v-container>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import Loading from '@/components/Loading.vue'
const axios = require('axios')

export default {
  name: 'search',

  components: {
    ItemList,
    Loading
  },

  data: function () {
    return {
      dateCheckBox: false,
      upkindCheckBox: false,
      kindCheckBox: false,
      uprCheckBox: false,
      orgCheckBox: false,
      neuterCheckBox: false,

      beginModal: false,
      beginDate: `${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`,
      endModal: false,
      endDate: `${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`,

      upkindRadioBtn: null,

      kindItem: null,
      kindItems: null,

      uprItem: null,
      uprItems: null,

      orgItem: null,
      orgItems: null,

      neuterRadioBtn: null,

      searchList: null,
      page: 1,
      totalCount: null,
      loading: false
    }
  },

  watch: {
    upkindRadioBtn: function (val) {
      if (!this.kindCheckBox) return
      axios.get(`kind?up_kind_cd=${val}`).then(({ data }) => {
        this.kindItems = data
      })
    },
    kindCheckBox: function (val) {
      if (!this.upkindRadioBtn || !val) return
      axios.get(`kind?up_kind_cd=${this.upkindRadioBtn}`).then(({ data }) => {
        this.kindItems = data
      })
    },

    uprCheckBox: function (val) {
      if (!val) return
      axios.get('sido').then(({ data }) => {
        this.uprItems = data
      })
    },

    uprItem: function (val) {
      if (!this.uprCheckBox) return
      axios.get(`sigungu?upr_cd=${val}`).then(({ data }) => {
        this.orgItems = data
      })
    },
    orgCheckBox: function (val) {
      if (!this.uprItem || !val) return
      axios.get(`sigungu?upr_cd=${this.uprItem}`).then(({ data }) => {
        this.orgItems = data
      })
    },

    page: function () {
      this.searchPet()
    }
  },

  methods: {
    searchPet: function () {
      this.loading = true

      let url = 'search?'
      if (this.dateCheckBox) url += `bgnde=${this.beginDate}&endde=${this.endDate}`
      if (this.upkindCheckBox && this.upkindRadioBtn) url += `&upkind=${this.upkindRadioBtn}`
      if (this.kindCheckBox && this.kindItem) url += `&kind=${this.kindItem}`
      if (this.uprCheckBox && this.uprItem) url += `&upr_cd=${this.uprItem}`
      if (this.orgCheckBox && this.orgItem) url += `&org_cd=${this.orgItem}`
      if (this.neuterCheckBox && this.neuterRadioBtn && this.neuterRadioBtn !== 0) url += `&neuter_yn=${this.neuterRadioBtn}`

      axios.get(`${url}&pageNo=${this.page}`).then(({ data }) => {
        this.totalCount = data.totalCount
        if (this.totalCount === 0) { this.searchList = null; this.loading = false; return }
        if (!Array.isArray(data.searchList)) data.searchList = [data.searchList]
        this.searchList = data.searchList
        this.loading = false
      })
    }
  }

}
</script>

<style>

</style>
