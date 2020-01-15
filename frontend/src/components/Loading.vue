<template>
  <v-overlay :value="loading">
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
