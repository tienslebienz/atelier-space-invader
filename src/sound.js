export default class Sounds {
    constructor() {
        this.audioContext = new AudioContext();
    }

    play(pitch) {
        var startTime = this.audioContext.currentTime;
        var endTime = startTime + .1;

        var filter = this.audioContext.createBiquadFilter()
        filter.connect(this.audioContext.destination)

        filter.frequency.setValueAtTime(10000, startTime)
        filter.frequency.linearRampToValueAtTime(500, endTime)

        var oscillator = this.audioContext.createOscillator()
        oscillator.connect(filter)

        oscillator.type = 'sawtooth'
        oscillator.detune.value = pitch * 100

        oscillator.start(startTime)
        oscillator.stop(endTime)
    }

    pew() {
        this.play(5);
    }

    boom() {
        this.play(-15);
    }
}
