function pressed () {
    if (input.pinIsPressed(TouchPin.P0)) {
        return 0
    } else {
        return -1
    }
}
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
function isPinPressed (num: number) {
    pin = getPin(num)
    if (pin == 0) {
        while (pins.digitalReadPin(DigitalPin.P0) != 1) {
        	
        }
        return 1
    } else {
        return 0
    }
}
function getPin (num: number) {
    if (num == 0) {
        return pins.digitalReadPin(DigitalPin.P0)
    } else if (num == 1) {
        return pins.digitalReadPin(DigitalPin.P1)
    } else if (num == 2) {
        return pins.digitalReadPin(DigitalPin.P2)
    } else if (num == 3) {
        return pins.digitalReadPin(DigitalPin.P2)
    } else {
        return -1
    }
}
function whichButtonPressed () {
    if (isPinPressed(0) == 1) {
        return 0
    } else {
        return -1
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
let pin = 0
basic.showLeds(`
    # . . . #
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
led.enable(false)
let correct_sequence = [randint(0, 3)]
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    serial.writeNumber(whichButtonPressed())
    serial.writeLine("")
    basic.pause(100)
})
