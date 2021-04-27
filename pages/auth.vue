<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="6" md="4" class="text-center">
      <Progress v-show="loading" />
      <div v-show="!loading" class="text-center">
        <app-logo />
      </div>
      <v-form
        v-show="!loading"
        ref="form"
        v-model="isValid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-card min-width="250">
          <v-card-title> Login </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="user.name"
              :rules="nameRules"
              label="Name"
              required
            />
            <v-text-field
              v-model="user.room"
              :rules="roomRules"
              label="Room"
              required
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn :disabled="!isValid" color="primary" type="submit">
              Enter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
import Progress from '~/components/Shared/Progress.vue'

export default {
  name: 'Auth',
  layout: 'login',
  components: {
    AppLogo,
    Progress
  },
  data() {
    return {
      isValid: true,
      user: {
        name: '',
        room: ''
      },
      nameRules: [v => !!v || 'Name is required'],
      roomRules: [v => !!v || 'Enter the room'],
      loading: true
    }
  },
  async beforeMount() {
    const user = JSON.parse(window.localStorage.getItem('vuex'))?.user || {}
    if (Object.keys(user).length) {
      await this.$store.dispatch('createUser', {
        ...user
      })
      this.$router.push('/')?.catch(() => {})
    } else {
      this.loading = false
    }
  },
  methods: {
    ...mapActions(['createUser']),
    async submit() {
      if (this.$refs.form.validate()) {
        await this.createUser(this.user)
        this.$router.push('/')?.catch(() => {})
      }
    }
  }
}
</script>
