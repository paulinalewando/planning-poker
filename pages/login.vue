<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <app-logo />
      </div>
      <v-card> </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  name: 'Login',
  layout: 'login',
  components: {
    AppLogo
  },
  data() {
    return {}
  }
}
</script>
