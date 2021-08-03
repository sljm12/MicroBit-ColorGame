function showLightSound (num: number) {
    if (num == 0) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (num == 1) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (num == 2) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else {
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    ))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.showLeds(`
    # . . . #
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
let correct_sequence = [randint(0, 3)]
for (let value of correct_sequence) {
    showLightSound(value)
}
basic.forever(function () {
	
})
