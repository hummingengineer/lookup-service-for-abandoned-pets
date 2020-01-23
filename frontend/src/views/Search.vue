<template>
  <v-container>

    <v-row class="mb-6 mb-sm-0 mb-lg-0 mb-xl-0">
      <v-col>
        <v-checkbox v-model="dateMenu" class="mx-2" label="날짜 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="upkindMenu" class="mx-2" label="동물 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="kindMenu" class="mx-2" label="품종 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="uprMenu" class="mx-2" label="시/도 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="orgMenu" class="mx-2" label="시/군/구 선택"/>
      </v-col>
      <v-col>
        <v-checkbox v-model="neuterMenu" class="mx-2" label="중성화 여부 선택"/>
      </v-col>
    </v-row>

    <v-divider/>
    <v-divider class="mb-1"/>

    <v-row v-if="dateMenu">
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

    <v-row v-if="upkindMenu">
      <v-col>
        <p>동물 선택</p>
        <v-radio-group v-model="upkindRadioBtn" row>
          <v-radio label="개" value="417000"></v-radio>
          <v-radio label="고양이" value="422400"></v-radio>
          <v-radio label="기타 동물" value="429900"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row v-if="neuterMenu">
      <v-col>
        <p>중성화 여부</p>
        <v-radio-group v-model="neuterRadioBtn" row>
          <v-radio label="전체" value="null"></v-radio>
          <v-radio label="예" value="Y"></v-radio>
          <v-radio label="아니오" value="N"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'search',

  data: function () {
    return {
      dateMenu: false,
      upkindMenu: false,
      kindMenu: false,
      uprMenu: false,
      orgMenu: false,
      neuterMenu: false,

      beginModal: false,
      beginDate: `${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`,
      endModal: false,
      endDate: `${new Date().getFullYear()}-${('0' + new Date().getMonth() + 1).slice(-2)}-${new Date().getDate()}`,

      upkindRadioBtn: null,

      neuterRadioBtn: null
    }
  }

}
</script>

<style>

</style>
