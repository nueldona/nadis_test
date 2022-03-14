<template>
  <div class="bg-lightblue">
    <navigation :active="'report'"></navigation>
    <section>
      <submit-reports></submit-reports>
    </section>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import SubmitReports from '../components/Report/SubmitReports.vue'
export default {
  components: { Navigation, SubmitReports }
}
</script>

<style></style>
