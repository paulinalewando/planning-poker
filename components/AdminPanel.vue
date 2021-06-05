<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form" @submit.prevent="post">
        <v-text-field
          v-model="task"
          solo
          label="Create task"
          :rules="rules"
          @blur="resetValidation"
        ></v-text-field>
        <v-row align="center" justify="space-between">
          <v-btn depressed @click="reset"> Reset </v-btn>
          <v-btn outlined color="primary" @click="showVotes = !showVotes">
            <v-icon v-if="!showVotes" color="primary" left>
              fa-surprise
            </v-icon>
            {{ showVotes ? 'HIDE' : 'SHOW' }}
          </v-btn>
          <v-btn depressed color="primary" @click="post"> Post </v-btn>
        </v-row>
      </v-form>
    </v-col>
    <v-col cols="12" class="mt-6">
      <v-row>
        <v-col v-for="v in vouters" :key="v.id" cols="12" md="3">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover && showVotes ? 16 : 2"
              :color="v.vote ? 'primary lighten-2' : 'grey'"
              class="d-flex align-center"
              dark
              height="150"
            >
              <div v-if="!showVotes" class="display-1 flex-grow-1 text-center">
                {{ v.name }}
              </div>
              <div v-else class="display-1 flex-grow-1 text-center">
                {{ hover ? v.name : v.vote }}
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminPanel',
  data() {
    return {
      task: '',
      rules: [v => !!v || 'Text is required'],
      showVotes: false
    }
  },
  computed: {
    ...mapGetters(['vouters'])
  },
  methods: {
    ...mapActions(['createTask', 'resetTask']),
    post() {
      if (this.$refs.form.validate()) {
        this.createTask(this.task)
      }
    },
    reset() {
      this.resetTask()
      this.task = ''
      this.resetValidation()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style></style>
