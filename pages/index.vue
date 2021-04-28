<template>
  <v-row justify="center" align="center">
    <v-col v-if="admin" cols="12" sm="10" md="8" class="my-4">
      <AdminPanel v-if="user.admin" />
      <NormalPanel v-else />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
    ...mapGetters(['admin'])
  },
  middleware: 'auth',
  created() {
    this.joinRoom(this.user)
  },
  methods: {
    ...mapActions(['joinRoom', 'leftRoom']),
    exit() {
      this.leftRoom()
      this.$router.push('/auth')
    }
  }
}
</script>
