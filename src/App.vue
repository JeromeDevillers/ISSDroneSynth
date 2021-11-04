<template>
  <div>
    <transition name="fade">
      <SplashScreen v-if="isSplash" />
    </transition>
    <div
      v-if="!isSplash"
      id="nav"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue"
export default {
  name: 'App',
  components: {
    SplashScreen
  },
  data() {
    return {
      isSplash: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isSplash = false;
    }, 2000);
  },
}
</script>

<style lang="scss">

body {
  background: #414147;
  padding: 0;
  margin: 0;
}

#app {
  font-family: monospace;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a7a9be;
}

a {
  font-weight: bold;
  color: #f25f4c;

  &.router-link-exact-active {
    color: #e53170;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
