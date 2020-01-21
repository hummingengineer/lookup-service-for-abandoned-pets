<template>
  <v-container>

    <v-row>
      <v-col>
        <v-dialog ref="beginDialog" v-model="beginModal" :return-value.sync="beginDate" persistent width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="beginDate" label="검색 시작일" prepend-icon="mdi-calendar" readonly v-on="on"/>
          </template>
          <v-date-picker v-model="beginDate" scrollable locale="ko-KR">
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
          <v-date-picker v-model="endDate" scrollable locale="ko-KR">
            <v-spacer/>
            <v-btn text color="primary" @click="endModal = false">취소</v-btn>
            <v-btn text color="primary" @click="$refs.endDialog.save(endDate)">확인</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'search',

  data: function () {
    return {
      beginModal: false,
      beginDate: new Date().toISOString().substr(0, 10),
      endModal: false,
      endDate: new Date().toISOString().substr(0, 10)
    }
  }

}
</script>

<style>

</style>
