<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav>
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
          <v-list-item-title>홈</v-list-item-title>
        </v-list-item>
        <v-list-item to="/search" @click="drawer = false">
          <v-list-item-icon><v-icon>mdi-magnify</v-icon></v-list-item-icon>
          <v-list-item-title>검색</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn icon to="/search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>개발자 홈페이지</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: function () {
    return {
      drawer: false
    }
  }

}
</script>

<style>

</style>
