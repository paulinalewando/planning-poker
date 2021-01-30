<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="6" md="4">
      <div class="text-center">
        <app-logo />
      </div>
      <v-form
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

export default {
  name: 'Login',
  layout: 'login',
  components: {
    AppLogo
  },
  data() {
    return {
      isValid: true,
      user: {
        name: '',
        room: ''
      },
      nameRules: [v => !!v || 'Name is required'],
      roomRules: [v => !!v || 'Enter the room']
    }
  },
  methods: {
    ...mapActions(['createUser']),
    async submit() {
      if (this.$refs.form.validate()) {
        await this.createUser(this.user)
        this.$router.push('/')
      }
    }
  }
}
</script>
