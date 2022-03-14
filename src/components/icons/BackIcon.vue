import { defaults } from 'autoprefixer';
<template>
  <svg
    enable-background="new 0 0 408 408"
    version="1.1"
    class="fill-current inline-block"
    :class="[width, height, color]"
    viewBox="0 0 408 408"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-4'
    },
    height: {
      type: String,
      default: 'h-4'
    },
    color: {
      type: String,
      default: 'text-primary'
    }
  }
}
</script>

<style></style>
