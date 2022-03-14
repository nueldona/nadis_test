<template>
  <div class="flex flex-col h-screen px-7 bg-lightblue space-y-7 py-8">
    <div class="inline-flex align-middle justify-between w-1/2">
      <router-link to="/">
        <back-icon></back-icon>
      </router-link>

      <h3 class="text-sm place-items-center">Setup</h3>
    </div>
    <div class="text-left">
      <h1 class="text-2xl">Reporting officer details</h1>
      <p class="text-base mt-3 mb-2">Please confirm and fill in the missing information</p>
    </div>
    <officer-details></officer-details>
  </div>
</template>

<script>
import BackIcon from '../components/icons/BackIcon.vue'
import OfficerDetails from '../components/OfficerDetailSetup/OfficerDetails.vue'
export default {
  components: { OfficerDetails, BackIcon }
}
</script>

<style></style>
