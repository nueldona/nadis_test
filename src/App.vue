<template>
  <div id="app">
    <transition name="fade" mode="out-in"> </transition>
    <router-view class="max-w-screen-md mx-auto" />

    <!-- <router-view class="max-w-screen-md mx-auto" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
