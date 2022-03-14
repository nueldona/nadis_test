<template>
  <div class="bg-lightblue">
    <navigation :active="'notification'"></navigation>
    <section>
      <event-lists></event-lists>
    </section>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import EventLists from '../components/Notification/EventLists.vue'

export default {
  components: { Navigation, EventLists }
}
</script>

<style></style>
