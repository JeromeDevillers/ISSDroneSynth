<template>
  <div class="splashscreen">
    <div class="splashscreen__svg-container">
      <Splash />
    </div>
    <div>
      <h1>ISS Drone/Noise Machine</h1>
    </div>
  </div>
</template>

<script>
import Splash from './../components/Splash/Logo.vue'
export default {
  name: 'SplashScreen',
  components: {
    Splash
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.splashscreen {
    background: blue;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
    display: grid;
    text-align: center;

    &__svg-container {
        display: inline-block;
        position: relative;
        width: 100%;
        vertical-align: middle;
        overflow: hidden;

        svg {
            margin: 0 auto;
            margin-top: 4rem;
            align-self: center;
        }
    }

    h1 {
        text-align: center;
        display: inline-flex;
    }
}
</style>
