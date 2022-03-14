<template>
  <section class="pt-6">
    <div class="space-y-2">
      <p class="text-base text-paragraphcolor font-semibold">Finish Outstanding Reports</p>
      <p class="text-sm text-paragraphcolor">You have 2 reports with missing fields, please complete them to submit.</p>
    </div>
    <section class="pt-4 space-y-4">
      <section
        v-for="outstanding in outstandingreports"
        :key="outstanding.id"
        :class="[outstanding.background, outstanding.border]"
        class="border-l-2 py-5 px-4"
      >
        <div class="flex flex-row justify-between">
          <p class="text-base font-semibold">{{ outstanding.title }}</p>
          <div class="h-6 px-2 text-xs bg-white py-1 text-center rounded-full">{{ outstanding.report_type }}</div>
        </div>
        <p class="text-xs my-2 leading-3">{{ outstanding.date }}</p>
        <div>
          <p class="text-xs text-bluefont">{{ outstanding.unfilled }}</p>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      outstandingreports: [
        {
          id: 1,
          title: 'Name of disease',
          date: 'Last edited - 24 March, 2020',
          unfilled: '8 unfilled fields',
          report_type: 'Outbreak report',
          background: 'bg-pinkbackground',
          border: 'border-pinkborder'
        },
        {
          id: 2,
          title: 'Name of disease',
          date: 'Last edited - 20 March, 2020',
          unfilled: '7 unfilled fields',
          report_type: 'Vaccination report',
          background: 'bg-skybluebg',
          border: 'border-skyblueborder'
        },
        {
          id: 3,
          title: 'Name of disease',
          date: 'Last edited - 24 March, 2020',
          unfilled: '6 unfilled fields',
          report_type: 'Veterinarian report',
          background: 'bg-xlightblue',
          border: 'border-lightgreenborder'
        }
      ]
    }
  }
}
</script>

<style></style>
