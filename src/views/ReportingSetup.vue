<template>
  <div class="flex flex-col h-screen px-7 bg-lightblue py-8">
    <heading></heading>
    <reporting-unit></reporting-unit>
  </div>
</template>

<script>
import Heading from '../components/ReportingUnitSetUp/Heading.vue'
import ReportingUnit from '../components/ReportingUnitSetUp/ReportingUnit.vue'
export default {
  components: { ReportingUnit, Heading }
}
</script>

<style></style>
