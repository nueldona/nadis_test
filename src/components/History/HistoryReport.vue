<template>
  <section class="px-4">
    <section
      class="px-4 py-4 mt-5 border-2"
      v-for="event in events"
      :key="event.id"
      :class="[event.background, event.border]"
    >
      <div class="flex flex-row justify-between">
        <p class="text-base font-medium">{{ event.name_of_disease }}</p>
        <div class="h-6 px-2 text-xs bg-white py-1 text-center rounded-full">
          {{ event.report_type }}
        </div>
      </div>
      <p class="text-xs my-2 leading-3">{{ event.date }}</p>
      <div class="" v-if="event.report_status == 'Failed to send'">
        <p class="text-xs text-red-600 py-1">{{ event.report_status }}</p>
      </div>
      <div v-else>
        <p class="text-xs flex flex-row align-middle text-leadtextcolor font-semibold">
          {{ event.report_status }}
          <span class="w-1 h-1 bg-red-200 block mx-2 mt-2 rounded-full"> </span
          ><span class="text-olivegreentext font-medium" :class="{ accepted: event.report_stage == 'Accepted' }">{{
            event.report_stage
          }}</span>
        </p>
      </div>
      <div
        class="mt-4 px-2 py-1 error text-xs rounded-sm flex flex-row justify-between align-middle"
        v-show="event.error_report !== ''"
        :class="event.innerbg"
      >
        <p class="pr-2">
          {{ event.error_report }}
        </p>
        <button class="text-white px-3 h-6 text-xs bg-primary outline-none rounded-sm mt-1">Retry</button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          name_of_disease: 'Name of disease',
          date: 'Date submitted - 24 March, 2020',
          report_status: 'Sent',
          report_stage: 'Pending acceptance',
          report_type: 'Outbreak report',
          error_report: '',
          background: 'bg-pinkbackground',
          border: 'border-none',
          innerbg: ''
        },
        {
          id: 2,
          name_of_disease: 'Name of disease',
          date: 'Date submitted - 24 March, 2020',
          report_status: 'Failed to send',
          report_stage: '',
          report_type: 'Outbreak report',
          error_report: 'This report could not be sent due to poor internet. Please retry',
          background: 'bg-pinkbackground',
          border: 'border-pinkborder',
          innerbg: 'bg-blushpinkbg'
        },
        {
          id: 3,
          name_of_disease: 'Name of disease',
          date: 'Date submitted - 24 March, 2020',
          report_status: 'Sent',
          report_stage: 'Accepted',
          report_type: 'Outbreak report',
          error_report: '',
          background: 'bg-pinkbackground',
          border: 'border-none',
          innerbg: ''
        },
        {
          id: 4,
          name_of_disease: 'Name of disease',
          date: 'Date submitted - 24 March, 2020',
          report_status: 'Failed to send',
          report_stage: '',
          report_type: 'Vaccination report',
          error_report: 'This report could not be sent due to poor internet. Please retry',
          background: 'bg-skybluebg',
          border: 'border-skyblueborder',
          innerbg: 'bg-steelbluebg'
        }
      ]
    }
  }
}
</script>

<style>
.accepted {
  color: #005d5d;
}
</style>
