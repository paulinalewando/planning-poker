<template>
  <v-app>
    <v-app-bar fixed app dark color="primary">
      <v-toolbar-title class="logo text-h5" v-text="title" />
      <span class="ml-6 text-caption">room: {{ user.room }}</span>
      <v-spacer />
      <v-icon v-if="user.admin" x-small tooltip="Admin">fa-user-shield</v-icon>
      <v-icon v-else x-small>fa-user</v-icon>
      <span class="mx-2">Hi {{ user.name }}!</span>
      <v-btn v-if="!user.admin" icon @click.prevent="setActivity">
        <v-icon v-if="user.active" tooltip="Pause">fa-pause-circle</v-icon>
        <v-icon v-else tooltip="Start">fa-play-circle</v-icon>
      </v-btn>
      <v-btn icon @click.prevent="logOut">
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Default',
  middleware: 'auth',
  data() {
    return {
      title: 'Planning poker'
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['leftRoom', 'setActiveStatus']),
    logOut() {
      this.leftRoom()
      window.localStorage.clear()
      this.$router.push('/auth')?.catch(() => {})
    },
    setActivity() {
      this.setActiveStatus(!this.user.active)
    }
  }
}
</script>

<style lang="scss">
.logo {
  font-family: 'Leckerli One', cursive !important;
}
</style>
