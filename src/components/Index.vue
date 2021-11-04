<template>
  <div>
    <div class="main">
      <div
        id="panel-1"
        class="panel"
      >
        <Planet />
      </div>
      <div
        id="panel-2"
        class="panel"
      >
        <Oscilloscope />
      </div>
    </div>
    <!-- <div class="main">
      Menu
    </div> -->
    <SoundsGenerator />
  </div>
</template>
<script>

import SoundsGenerator from './SoundsGenerator/SoundsGenerator.vue'
import Planet from './Planet/PlanetComponent.vue'
import Oscilloscope from './Oscilloscope/OscilloscopeComponent.vue'

export default {
  name: "Index",
  components: {
    SoundsGenerator,
    Planet,
    Oscilloscope
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: grid;
  overflow: hidden;
  height: 100vh;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
</style>
