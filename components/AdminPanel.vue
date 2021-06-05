<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form" @submit.prevent="post">
        <v-text-field
          v-model="taskText"
          solo
          label="Create task"
          :rules="rules"
          @blur="resetValidation"
        ></v-text-field>
        <v-row align="center" justify="space-between">
          <v-btn depressed @click="reset"> Reset </v-btn>
          <v-btn
            v-if="task.text"
            outlined
            color="primary"
            @click="showVotes = !showVotes"
          >
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
                {{ hover || !v.active ? v.name : v.vote }}
              </div>
              <v-overlay :absolute="true" :value="!v.active" opacity="0">
                <v-icon x-large style="opacity: 0.3">fa-pause</v-icon>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'AdminPanel',
  data() {
    return {
      taskText: '',
      rules: [v => !!v || 'Text is required'],
      showVotes: false
    }
  },
  computed: {
    ...mapGetters(['vouters']),
    ...mapState(['task'])
  },
  methods: {
    ...mapActions(['createTask', 'resetTask']),
    post() {
      if (this.$refs.form.validate()) {
        this.showVotes = false
        this.createTask(this.taskText)
      }
    },
    reset() {
      this.resetTask()
      this.taskText = ''
      this.showVotes = false
      this.resetValidation()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped></style>
