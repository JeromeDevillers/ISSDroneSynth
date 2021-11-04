<template>
  <div>
    <div id="p5-canvas-planet" />
  </div>
</template>

<script>
export default {
  name: 'PlanetComponent',
  props: {},
  data () {
    return {
      entityColorPrimary: '#a7a9be',
      entityColorSecondary: '#fffffe',
      backgroundColor: '#0f0e17',
      planetSpeed: 0.04
    }
  },
  mounted () {
    new p5(this.drawP5, 'p5-canvas-planet')
  },
  methods: {
    drawP5 () {
      const sketch = p5 => {
        var orbitCenterX = 300
        var orbitCenterY = 300
        var orbitRadius = 300
        var angle = 0
        var speed = this.planetSpeed
        let getContainerWidth = document.getElementById('panel-1').offsetWidth
        let getContainerHeight = document.getElementById('panel-1').offsetHeight

        p5.setup = () => {
          let canvas = p5.createCanvas(
            getContainerWidth,
            getContainerHeight,
            p5.P2D
          )
          p5.noStroke()
          canvas.parent('p5-canvas-planet')
        }

        p5.windowResized = () => {
          p5.resizeCanvas(document.body.offsetWidth / 2, document.body.offsetHeight)
        }

        p5.draw = () => {
          p5.background(this.backgroundColor)

          var xx = p5.width / 2 + (orbitRadius * p5.cos(angle)) / 2
          var yy = p5.height / 2 + (orbitRadius * p5.sin(angle)) / 2

          p5.ellipse(p5.width / 2, p5.height / 2, 100, 100).fill(
            this.entityColorSecondary
          )
          p5.ellipse(xx, yy, 20, 20).fill(this.entityColorPrimary)

          angle += speed
        }
      }

      new p5(sketch)
    }
  }
}
</script>
