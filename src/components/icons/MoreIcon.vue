<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="[width, height]"
    class="fill-current inline-block"
    viewBox="0 0 24 24"
  >
    <path d="M0,0H24V24H0Z" :class="fill" />
    <path
      :class="color"
      d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-white'
    },
    fill: {
      type: String,
      default: 'text-navbackgroundcolor'
    },
    width: {
      type: String,
      default: 'w-6'
    },
    height: {
      type: String,
      default: 'h-6'
    }
  }
}
</script>

<style></style>
