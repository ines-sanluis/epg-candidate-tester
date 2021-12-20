<template>
  <v-app>
    <v-app-bar app class="primary darken-2">
      <v-btn :ripple="false" icon><v-icon>mdi-account</v-icon></v-btn>
      <v-spacer></v-spacer>
      <img src="./assets/logo.png" class="logoPng" align-center center height="35px">
      <v-spacer></v-spacer>
      <v-btn :ripple="false" icon><v-icon>mdi-magnify</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="primary justify-space-between" app bottom fixed>
      <router-link tag="button" to="/home"><v-icon>mdi-home</v-icon></router-link>
      <router-link tag="button" to="/error"><v-icon>mdi-television-play</v-icon></router-link>
      <router-link tag="button" to="/epg"><v-icon>mdi-format-list-bulleted-square</v-icon></router-link>
      <router-link tag="button" to="/error"><v-icon>mdi-replay</v-icon></router-link>
      <router-link tag="button" to="/program-details"><v-icon>mdi-book-open-variant</v-icon></router-link>
    </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
