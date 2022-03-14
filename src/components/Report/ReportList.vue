<template>
  <section>
    <div>
      <ul>
        <li
          class="border-l-2 py-6 px-4 text-left my-4"
          :class="[report.background, report.border]"
          v-for="report in reports"
          :key="report.id"
        >
          {{ report.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reports: [
        { id: 1, title: 'Outbreak Report', border: 'border-pinkborder', background: 'bg-pinkbackground' },

        { id: 2, title: 'Vaccination Report', border: 'border-skyblueborder', background: 'bg-skybluebg' },

        { id: 3, title: 'Disease Suspicion Report', border: 'border-orangeborder', background: 'bg-pinkbackground' },

        { id: 4, title: 'Abattoir Disease Report', border: 'border-blueborder', background: 'bg-bluebg' },

        {
          id: 5,
          title: 'Private Veterinarian Disease Report',
          border: 'border-lightgreenborder',
          background: 'bg-xlightblue'
        },

        {
          id: 6,
          title: 'Laboratory Disease Report',
          border: 'border-olivegreenborder',
          background: 'bg-lightorangebg'
        },

        {
          id: 7,
          title: 'AMR/AMU Report',
          border: 'border-azureblueborder',
          background: 'bg-carolinebluebg'
        },

        {
          id: 8,
          title: 'Hatchery Disease Report',
          border: 'border-limegreenborder',
          background: 'bg-mintgreenbg'
        },

        {
          id: 9,
          title: 'Aquaculture Disease Report',
          border: 'border-blackborder',
          background: 'bg-graybg'
        }
      ]
    }
  }
}
</script>

<style></style>
