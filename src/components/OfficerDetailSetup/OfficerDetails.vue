<template>
  <div>
    <form class="w-100 space-y-8">
      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 mt-1 absolute font-medium" v-if="fullname !== ''">
          Full Name
        </div>
        <input
          type="text"
          placeholder="Full Name"
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
          v-model="fullname"
        />
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="user !== ''">Type of User</div>
        <input
          list="Type of User"
          type="text"
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
          placeholder="Country of residence"
          required
          v-model="user"
        />
        <datalist id="Type of User">
          <option value="Laboratory"></option>
          <option value="Private Clinic/Hospital"></option>
          <option value="Importer"></option>
          <option value="Manufacturer"></option>
          <option value="Repackager"></option>
          <option value="Feed Mill Operator"></option>
        </datalist>
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="phonenumber !== ''">Phone Number</div>
        <input
          type="number"
          placeholder="Phone Number"
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
          v-model="phonenumber"
        />
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="number !== ''">VCN Number</div>
        <input
          type="number"
          placeholder="VCN Number"
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
        <div v-if="number !== ''" class="text-sm text-left mt-1 ml-3">Optional (for veterinarians only)</div>
      </div>

      <div class="relative">
        <div class="text-xs text-primary text-left ml-3 absolute" v-if="organization !== ''">
          Organization Affiliated With
        </div>
        <input
          type="text"
          placeholder="Organization Affiliated With"
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
          v-model="organization"
        />
      </div>

      <router-link
        to="/setup/reporting_unit"
        class="w-100 block h-14 px-4 py-4 bg-primary text-center text-white rounded-sm"
      >
        Next
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      number: '',
      user: '',
      phonenumber: '',
      organization: ''
    }
  }
}
</script>

<style></style>
