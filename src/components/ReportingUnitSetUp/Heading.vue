<template>
  <div class="w-full text-left">
    <div class="inline-flex align-middle justify-between w-1/2">
      <router-link to="/setup/officer_details">
        <back-icon></back-icon>
      </router-link>

      <h3 class="text-sm">Setup</h3>
    </div>
    <div class="text-left pt-20">
      <h1 class="text-2xl">Reporting Unit</h1>
      <p class="text-base mt-3 mb-2">Please confirm and fill in the missing information below</p>
    </div>
  </div>
</template>

<script>
import BackIcon from '../icons/BackIcon.vue'
export default {
  components: { BackIcon }
}
</script>

<style></style>
