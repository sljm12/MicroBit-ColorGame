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
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.rest(music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else if (num == 1) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P13, 1)
        music.rest(music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (num == 2) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P14, 1)
        music.rest(music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        music.playTone(494, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P15, 1)
        music.rest(music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
}
function isPinPressed (num: number) {
    pin = getPin(num)
    if (pin == 0) {
        while (getPin(num) != 1) {
        	
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
let button_pressed = 0
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
    let press_sequence: number[] = []
    serial.writeNumbers(correct_sequence)
    serial.writeLine("")
    for (let value of correct_sequence) {
        showLightSound(value)
    }
    while (correct_sequence.length != press_sequence.length) {
        button_pressed = whichButtonPressed()
        basic.pause(100)
        if (button_pressed != -1) {
            press_sequence.push(button_pressed)
            serial.writeString("Button:")
            serial.writeNumber(button_pressed)
            serial.writeLine("")
        }
    }
    correct_sequence.push(randint(0, 3))
})
