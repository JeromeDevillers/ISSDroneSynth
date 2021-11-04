<p align="center">
  <img src="https://user-images.githubusercontent.com/4960853/139852186-700ead69-15d4-4b6e-8645-fcebe0a858ed.png" alt="ISS Drone/Noise"/>
</p>


# ISSDroneSynth
Noise/Drone Synth made with vueJS.

🚧 **NOTE: This is a work in progress project !**


#### Live Demo : https://isssynth.jeromedevillers.com/

## 🚀 About The Project
I wanted to make a noise/drone synth using International Space Station data.

Something challenging for this project was to use ISS data and convert that to an audible sound. For reference, human can hear frequencies from 20Hz to 20kHz. (https://en.wikipedia.org/wiki/Hearing_range)

## 📷 Preview :

<p align="center">
  <img src="https://user-images.githubusercontent.com/4960853/140243742-74a5dacb-fa61-407a-a50d-9f6134c6f638.gif" alt="ISS Drone/Noise"/>
</p>



## 🛠️ Get Started

To **Start**:

```bash
$ npm install
```

To **Develop**:

```bash
$ npm run serve
```

To Build For **Production**:

```bash
$ npm run build
```

## Local
You can now access `http://localhost:4000/` you should now heard sound.

## 🛣️ Roadmap


### Software :

- [X] Setup project & add basic files structure.
- [X] Add [Tone.js](https://tonejs.github.io/) & Generate audible frequencies.
- [X] Add [P5.js](https://p5js.org/) & Generate minimalist animations.
- [ ] Add volume control.
- [ ] Add sound effects controls (Delay, Chorus) and make animations react relative to value.

### Hardware :

- [ ] Embed this project to a Raspberry Pi.
- [ ] Add some physical controls with Arduino.
- [ ] Create and print 3D enclosure.
