<template>
    <div class="hack-clickable-box">
  <div v-for="hack in hacks" :key="hack.id" class="hack-box">
    <h2 class="hack-box-text">{{ hack.name }}</h2>
    <p class="hack-box-text">{{ hack.description }}</p>
    <p class="hack-box-text">From {{ hack.start_date }} to {{ hack.end_date }}</p>
    <p class="hack-box-text">Be there or be square! Click for more information.</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "HackItem",
  props: {
    hacks: {
      type: Array,
    },
  },
};
</script>

<style scoped>
@import '../styles/hack-deets.css'
</style>