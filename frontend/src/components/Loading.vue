<template>
  <v-overlay absolute :value="loading" color="white">
    <v-progress-circular indeterminate size="50" color="primary" />
  </v-overlay>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style>

</style>
