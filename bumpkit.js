
import Bumpkit from '../src'

const sampleDirectory = 'https://scottdesdev.github.io/audio-demo/'

const bumpkit = new Bumpkit({
  tempo: 96,
  loop: 64
})

const tracks = [
  {
    name: 'Drum',
    loops: [
      { name: 'Beat 01', url: 'beats/everything-beat-01.mp3', bpm: 96, loop: 32, active: true },
      { name: 'Beat 02', url: 'beats/everything-beat-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Beat 03', url: 'beats/everything-beat-03.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Beat 04', url: 'beats/everything-beat-04.mp3', bpm: 96, loop: 32, active: false },

      { name: 'MorBeat 01', url: 'beats/last-forever-beat-01.mp3', bpm: 96, loop: 16, active: false },
      { name: 'MorBeat 02', url: 'beats/last-forever-beat-02.mp3', bpm: 96, loop: 16, active: false },
    ]
  },
  {
    name: 'Bass',
    loops: [
      { name: 'Bass 01', url: 'bass/everything-bass-01.mp3', bpm: 96, loop: 64, active: true },
      { name: 'Bass 02', url: 'bass/everything-bass-02.mp3', bpm: 96, loop: 64, active: false },
      { name: 'Bass 03', url: 'bass/everything-bass-03.mp3', bpm: 96, loop: 64, active: false },
      { name: 'Bass 04', url: 'bass/everything-bass-04.mp3', bpm: 96, loop: 64, active: false },

      { name: 'MorBass 01', url: 'bass/last-forever-bass-01.mp3', bpm: 96, loop: 32, active: false },
      { name: 'MorBass 02', url: 'bass/last-forever-bass-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'MorBass 03', url: 'bass/last-forever-bass-03.mp3', bpm: 96, loop: 32, active: false },
    ]
  },
  {
    name: 'Samples',
    loops: [
      { name: 'Vox Samp 01', url: 'samples/everything-cutup-01.mp3', bpm: 96, loop: 32, active: true },
      { name: 'Vox Samp 02', url: 'samples/everything-cutup-02.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Vox Samp 03', url: 'samples/everything-cutup-03.mp3', bpm: 96, loop: 32, active: false },
      { name: 'Vox Samp 04', url: 'samples/everything-cutup-04.mp3', bpm: 96, loop: 32, active: false },

      { name: 'MorVox Samp 01',   url: 'samples/last-forever-vocal.mp3',      bpm: 96, loop: 16, active: false },
      { name: 'MorVox Samp 02',   url: 'samples/last-forever-vocal-02.mp3',   bpm: 96, loop: 32, active: false },
      { name: 'MorVox Samp 03',   url: 'samples/last-forever-vocal-03.mp3',   bpm: 96, loop: 16, active: false },
      { name: 'MorVox Samp Fill', url: 'samples/last-forever-vocal-fill.mp3', bpm: 96, loop: 32, active: false },
    ]
  },
].map((track) => {
  track.loops = track.loops.map((l) => {
    l.url = sampleDirectory + l.url
    return l
  })
  return track
}).map((track) => {
  track.loops = track.loops.map((l) => {
    const { bpm, loop, url } = l
    l.looper = new Bumpkit.Looper(bumpkit, l)
    return l
  })
  return track
})

bumpkit.setState({ tracks })

export default bumpkit
