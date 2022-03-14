<template>
  <section class="text-left px-5 pt-8 pb-28">
    <h1 class="text-leadtextcolor text-xl">Hello, what would you like to do?</h1>
    <div class="pt-6 space-y-1">
      <p class="text-paragraphcolor text-base font-normal">Submit Reports</p>
      <p class="text-paragraphcolor text-xs font-normal">What type of report would you like to submit?</p>
    </div>
    <report-list></report-list>
    <outstanding-report></outstanding-report>
  </section>
</template>

<script>
import OutstandingReport from './OutstandingReport.vue'
import ReportList from './ReportList.vue'
export default {
  components: { ReportList, OutstandingReport }
}
</script>

<style></style>
