<template>
  <div class="flex flex-col justify-center h-screen px-7 bg-lightblue space-y-16">
    <welcome-text></welcome-text>
    <user-registeration></user-registeration>
  </div>
</template>

<script>
import UserRegisteration from '../components/Registration/UserRegisteration.vue'
import WelcomeText from '../components/Registration/WelcomeText.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    WelcomeText,
    UserRegisteration
  }
}
</script>
