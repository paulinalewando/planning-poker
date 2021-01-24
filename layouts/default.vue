<template>
  <v-app>
    <v-app-bar fixed app dark color="primary">
      <v-toolbar-title class="logo text-h5" v-text="title" />
      <v-spacer />
      <v-btn icon @click.prevent="signOutOidc">
        <v-icon tooltip="Logout">fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Planning poker'
    }
  }
}
</script>

<style lang="scss">
.logo {
  font-family: 'Leckerli One', cursive !important;
}
</style>
