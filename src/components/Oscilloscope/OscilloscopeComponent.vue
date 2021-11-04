<template>
  <div>
    <div id="p5-canvas-oscilloscope" />
  </div>
</template>

<script>
export default {
  name: 'OscilloscopeComponent',
  props: {},
  data () {
    return {
      backgroundColor: '#0f0e17',
      entityBackgroundColor: '#fffffe',
      vectorSpeed: 0.02,
    }
  },
  mounted () {
    new p5(this.drawP5, 'p5-canvas-oscilloscope')
  },
  methods: {
    drawP5 () {
      const sketch = p5 => {
        let yoff = 0.0

        p5.setup = () => {

          let getContainerWidth = document.getElementById("panel-2").offsetWidth
			    let getContainerHeight = document.getElementById("panel-2").offsetHeight

          let canvas = p5.createCanvas(
              getContainerWidth,
              getContainerHeight,
            p5.P2D
          )
          p5.noStroke()
          canvas.parent('p5-canvas-oscilloscope')
        }

        p5.windowResized = () => {
          p5.resizeCanvas(document.body.offsetWidth / 2, document.body.offsetHeight)
        }

        p5.draw = () => {
          p5.background(this.backgroundColor)
          p5.fill(this.entityBackgroundColor)
          p5.beginShape()

          let xoff = 0

          for (let x = 0; x <= p5.width; x += 10) {
            let y = p5.map(p5.noise(xoff, yoff), 0, 1, 200, 300)
            p5.vertex(x, y)
            xoff += 0.04;
          }

          yoff += this.vectorSpeed;
          p5.vertex(p5.width, p5.height);
          p5.vertex(0, p5.height);
          p5.endShape(p5.CLOSE);
        }
      }

      new p5(sketch)
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  display: block;
}
</style>
