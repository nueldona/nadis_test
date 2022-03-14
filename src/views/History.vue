<template>
  <div class="bg-lightblue">
    <navigation :active="'history'"></navigation>
    <transition name="fade" mode="out-in">
      <section>
        <section class="px-4 pt-6 pb-10">
          <input
            type="search"
            name=""
            id=""
            placeholder="Try searching date, name of disease or vaccine"
            class="w-full px-3 py-4 outline-none border-primary border bg-lightblue rounded-sm"
          />
        </section>
        <section>
          <p class="px-4 text-xs">Showing only sent reports for the last 6 months</p>
          <history-report></history-report>
        </section>
      </section>
    </transition>
  </div>
</template>

<script>
import HistoryReport from '../components/History/HistoryReport.vue'
import Navigation from '../components/Navigation.vue'

export default {
  components: { Navigation, HistoryReport }
}
</script>

<style>
input::placeholder {
  color: rgba(46, 70, 52, 0.64);
  font-size: 12px;
  line-height: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
