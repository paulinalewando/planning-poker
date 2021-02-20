<template>
  <v-progress-circular
    size="56"
    color="primary"
    indeterminate
    width="6"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-progress-circular>
</template>

<script>
export default {
  name: 'Progress'
}
</script>

<style></style>
