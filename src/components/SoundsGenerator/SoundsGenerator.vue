<template>
  <div>
    <div>
      <a
        href="#"
        class="btn__infos"
        @click="showDebug"
      >
        [i]
      </a>
    </div>
    <transition name="fade">
      <div
        v-if="isDebug"
        :class="{ 'is-debug': isDebug }"
        class="generator__data"
      >
        <a
          href="#"
          @click="showDebug"
        >
          [x]
        </a>
        <div>
          {{ issInfos }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import * as Tone from 'tone'
import axios from 'axios'

export default {
  name: 'SoundGenerator',
  data () {
    return {
      isDebug: false,
      delayTime: 0,
      chorusValue: 0,
      issInfos: []
    }
  },
  computed: {
    latitude () {
      return this.normalizeValue(this.issInfos.latitude)
    },
    longitude () {
      return this.normalizeValue(this.issInfos.longitude)
    },
    altitude () {
      return this.normalizeValue(this.issInfos.altitude)
    },
    velocity () {
      return this.normalizeValue(this.issInfos.velocity)
    },
    daynum () {
      return this.normalizeValue(this.issInfos.daynum)
    },
    timestamp () {
      return this.normalizeValue(this.issInfos.timestamp)
    },
    solar_lat () {
      return this.normalizeValue(this.issInfos.solar_lat)
    },
    solar_lon () {
      return this.normalizeValue(this.issInfos.solar_lon)
    }
  },
  mounted () {
    console.log(
      '%cSoundGenerator — Mounted',
      'color: green; font-weight: bold; background-color: black;'
    )
    this.retreiveIssData()
  },
  methods: {
    showDebug () {
      this.isDebug = !this.isDebug
    },
    normalizeValue (value) {
      value = value.toString()
      return Math.abs(value.substring(0, 3))
    },
    retreiveIssData () {
      axios
        .get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => {
          this.issInfos = response.data
          this.generateSounds({
            latitude: this.latitude,
            longitude: this.longitude,
            altitude: this.altitude,
            velocity: this.velocity,
            daynum: this.daynum,
            timestamp: this.timestamp,
            solar_lat: this.solar_lat,
            solar_lon: this.solar_lon
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    generateSounds (frequencies) {
      console.log(
        '%cSoundGenerator — Generate Sounds',
        'color: orange; font-weight: bold; background-color: black;'
      )
      const delay = new Tone.FeedbackDelay(this.delayTime).toDestination()
      const chorus = new Tone.Chorus(this.chorusValue).toDestination()
      const synth = new Tone.FMSynth().chain(delay, chorus).toDestination()
      const seq = new Tone.Sequence(
        (time, note) => {
          synth.triggerAttackRelease(note, 0.1, time)
        },
        [
          this.latitude,
          this.longitude,
          this.altitude,
          this.velocity,
          this.daynum,
          this.timestamp,
          this.solar_lat,
          this.solar_lon
        ]
      ).start(0)
      Tone.Transport.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.generator {
  &__data {
    background: #e53170;
    color: #fffffe;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    display: none;

    &.is-debug {
      display: block;

      a {
        color: #000000;
        margin-bottom: 1rem;
      }
    }
  }
}

.btn {
  &__infos {
    color: #fffffe;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-decoration: none;
    margin: 1rem 1rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    &:hover {
      opacity: 0.4;
      transition: opacity 0.5s ease-in-out;
    }
  }
}
</style>
