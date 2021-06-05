<template>
  <v-row>
    <v-col cols="12">
      <div>
        Vote on task: <strong>{{ task.text || 'no task' }}</strong>
      </div>
      <div class="text-overline">{{ task.time }}</div>
    </v-col>
    <v-col cols="12">
      <v-item-group @change="select">
        <v-row>
          <v-col v-for="n in options" :key="n" cols="12" md="3">
            <v-item v-slot="{ toggle }">
              <v-card
                :color="selected === n ? 'primary' : 'grey'"
                class="d-flex align-center"
                dark
                height="150"
                :disabled="!task.id"
                @click="
                  toggle()
                  vote(selected)
                "
              >
                <div class="display-1 flex-grow-1 text-center">
                  {{ n }}
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserPanel',
  data() {
    return {
      options: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 32, 100],
      selected: null
    }
  },
  computed: {
    ...mapState(['task'])
  },
  watch: {
    'task.text'() {
      this.selected = null
      this.vote(null)
    }
  },
  methods: {
    ...mapActions(['vote']),
    select(i) {
      this.selected = this.options[i]
    }
  }
}
</script>

<style></style>
