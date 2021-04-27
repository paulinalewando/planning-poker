<template>
  <v-row>
    <v-col cols="12">
      Vote on task: <strong>{{ task.text }}</strong>
    </v-col>
    <v-col cols="12">
      <v-item-group @change="select">
        <v-row>
          <v-col v-for="n in options" :key="n" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey'"
                class="d-flex align-center"
                dark
                height="125"
                @click="toggle"
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
import { mapState } from 'vuex'

export default {
  name: 'NormalPanel',
  data() {
    return {
      options: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 32, 100],
      selected: 0
    }
  },
  computed: {
    ...mapState(['task'])
  },
  methods: {
    select(e) {
      this.selected = e
    }
  }
}
</script>

<style></style>
