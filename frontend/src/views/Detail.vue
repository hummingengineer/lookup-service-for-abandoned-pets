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
