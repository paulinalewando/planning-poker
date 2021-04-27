<template>
  <v-row>
    <v-col cols="12">
      <v-form ref="form" @submit.prevent="post">
        <v-text-field
          v-model="question"
          solo
          label="Create task"
          :rules="rules"
        ></v-text-field>
        <v-row align="center" justify="space-around">
          <v-btn depressed @click="reset"> Reset </v-btn>
          <v-btn depressed color="primary" @click="post"> Post </v-btn>
        </v-row>
      </v-form>
      {{ vouters }}
    </v-col>
    <v-col cols="12">
      <v-item-group @change="select">
        <v-row>
          <v-col v-for="v in vouters" :key="v.id" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey'"
                class="d-flex align-center"
                dark
                height="125"
                @click="toggle"
              >
                <div class="display-1 flex-grow-1 text-center">
                  {{ v.name }}
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminPanel',
  data() {
    return {
      question: '',
      rules: [v => !!v || 'Text is required']
    }
  },
  computed: {
    ...mapGetters(['vouters'])
  },
  methods: {
    ...mapActions(['createTask', 'resetTask']),
    post() {
      if (this.$refs.form.validate()) {
        this.createTask(this.question)
      }
    },
    reset() {
      this.resetTask()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style></style>
