<template>
  <section class="bg-navbackgroundcolor text-left pt-8">
    <section class="w-full h-12 px-5 flex justify-between align-middle">
      <h1 class="text-xl leading-6 text-white font-normal">NADIS</h1>
      <section class="flex">
        <transition name="fade">
          <button class="bg-navbackgroundcolor rounded py-3 px-6 text-white mr-2 focus:outline-none" v-if="show">
            Log out
          </button>
        </transition>
        <div @click="show = !show">
          <more-icon class="cursor-pointer"></more-icon>
        </div>
      </section>
    </section>
    <nav class="w-full h-full">
      <ul class="grid grid-cols-3">
        <router-link
          to="/reports"
          class="py-5 text-sm leading-4 text-center font-normal text-navlinkscolor"
          :class="{ 'border-white border-b-2': active == 'report', 'border-navbackgroundcolor': active != 'report' }"
          >Report</router-link
        >
        <router-link
          to="/notification"
          class="py-5 text-sm leading-4 text-center font-normal text-navlinkscolor flex justify-center"
          :class="{
            'border-white border-b-2': active == 'notification',
            'border-navbackgroundcolor': active != 'notification'
          }"
          >Notification
          <span class="h-3 w-3 relative flex left-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </router-link>
        <router-link
          to="/history"
          class="py-5 text-sm leading-4 text-center font-normal text-navlinkscolor flex justify-center"
          :class="{ 'border-white border-b-2': active == 'history', 'border-navbackgroundcolor': active != 'history' }"
          >History
          <span class="h-3 w-3 relative flex left-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span> </span
        ></router-link>
      </ul>
    </nav>
  </section>
</template>

<script>
import MoreIcon from './icons/MoreIcon.vue'
export default {
  props: {
    active: {
      type: String
    }
  },
  components: { MoreIcon },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  box-shadow: 1px 2px 20px -7px rgba(0, 0, 0, 0.75);
}
</style>
