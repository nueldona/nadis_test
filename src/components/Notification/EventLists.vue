<template>
  <section class="px-4">
    <section
      class="px-4 py-4 mt-5 border-2"
      v-for="event in events"
      :key="event.id"
      :class="[event.background, event.border]"
    >
      <div class="flex flex-row justify-between">
        <p class="text-base font-semibold">{{ event.title }}</p>
        <div class="h-6 px-2 text-xs bg-white py-1 text-center rounded-full">
          {{ event.report_type }}
        </div>
      </div>
      <p class="text-xs my-2 leading-3">{{ event.date }}</p>
      <div class="" v-if="event.report_status != ''">
        <p class="text-xs text-turquoisefont py-1">{{ event.report_status }}</p>
      </div>
      <div class="mt-4 px-2 pt-2 pb-1 rounded-sm flex" v-show="event.error_report !== ''" :class="event.innerbg">
        <p class="text-xs font-medium pr-1">{{ event.error_report }}</p>
        <button class="text-white px-5 h-7 text-xs bg-primary outline-none rounded-sm">Edit</button>
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
          title: 'Name of disease',
          date: 'Today, 3:32pm',
          report_status: '',
          error_report:
            'The Epid officer has made some comments on this report. Please tap on the edit button to see comments and make changes.',
          report_type: 'Outbreak report',
          background: 'bg-pinkbackground',
          border: 'border-pinkborder',
          innerbg: 'bg-blushpinkbg'
        },
        {
          id: 2,
          title: 'Name of disease',
          date: 'Yesterday, 4:55 PM',
          report_status: 'Report has been accepted.',
          error_report: '',
          report_type: 'Outbreak report',
          background: 'bg-pinkbackground',
          border: 'border-none'
        },
        {
          id: 3,
          title: 'Name of disease',
          date: 'Today, 3:32 PM',
          report_status: '',
          error_report:
            'The Epid officer has made some comments on this report. Please tap on the edit button to see comments and make changes.',
          report_type: 'Veterinarian report',
          background: 'bg-skybluebg',
          border: 'border-skyblueborder',
          innerbg: 'bg-steelbluebg'
        },
        {
          id: 4,
          title: 'Name of disease',
          date: 'Yesterday, 4:55 PM',
          report_status: 'Report has been accepted.',
          error_report: '',
          report_type: 'Outbreak report',
          background: 'bg-pinkbackground',
          border: 'border-none'
        }
      ]
    }
  }
}
</script>

<style></style>
