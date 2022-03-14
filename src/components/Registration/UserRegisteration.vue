<template>
  <div class="w-full">
    <form class="w-100 space-y-8">
      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 mt-1 absolute font-medium" v-if="text !== ''">User Id</div>
        <input
          type="text"
          placeholder="User Id"
          class="
            w-full
            border-b-2 border-borderbottom
            px-3
            pt-5
            pb-3
            bg-inputcolor
            outline-none
            rounded-sm
            focus:bg-inputonfocus
            focus:border-primary
          "
          v-model="text"
        />
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 mt-1 absolute font-medium" v-if="number !== ''">PIN</div>
        <input
          type="text"
          placeholder="PIN"
          class="
            w-full
            border-b-2 border-borderbottom
            px-3
            pt-5
            pb-3
            bg-inputcolor
            outline-none
            rounded-sm
            focus:bg-inputonfocus
            focus:border-primary
          "
          v-model="number"
        />
      </div>

      <router-link
        to="setup/officer_details"
        class="w-100 block h-14 px-4 py-4 bg-primary text-center text-white rounded-sm"
      >
        Next
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserRegisteration',
  data() {
    return {
      text: '',
      number: ''
    }
  }
}
</script>

<style></style>
