<template>
  <div>
    <form class="w-100 space-y-8">
      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="state !== ''">State</div>
        <input
          list="State"
          type="text"
          class="
            w-full
            border-b border-borderbottom
            px-3
            pt-5
            pb-3
            bg-inputcolor
            outline-none
            rounded-sm
            focus:bg-inputonfocus
            focus:border-primary
          "
          placeholder="State"
          required
          v-model="state"
        />
        <datalist id="State">
          <option value="Lagos"></option>
          <option value="Abuja"></option>
          <option value="Ondo"></option>
        </datalist>
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="localgovt !== ''">Local Govt</div>
        <input
          list="Local Govt"
          type="text"
          class="
            w-full
            border-b border-borderbottom
            px-3
            pt-5
            pb-3
            bg-inputcolor
            outline-none
            rounded-sm
            focus:bg-inputonfocus
            focus:border-primary
          "
          placeholder="Local Govt"
          required
          v-model="localgovt"
        />
        <datalist id="Local Govt">
          <option value="Lagos"></option>
          <option value="Ondo"></option>
          <option value="Osun"></option>
        </datalist>
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="avo !== ''">AVO</div>
        <input
          type="number"
          placeholder="AVO"
          class="
            w-full
            border-b border-borderbottom
            px-3
            pt-5
            pb-3
            bg-inputcolor
            outline-none
            rounded-sm
            focus:bg-inputonfocus
            focus:border-primary
          "
          v-model="avo"
        />
      </div>

      <router-link to="/reports" class="w-100 block h-14 px-4 py-4 bg-primary text-center text-white rounded-sm">
        Done
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
      localgovt: '',
      avo: ''
    }
  }
}
</script>

<style></style>
