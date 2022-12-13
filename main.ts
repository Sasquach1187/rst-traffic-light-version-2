radio.onReceivedNumber(function (receivedNumber) {
    Green()
    dobe = (0 as any) == (true as any)
})
function lights () {
    Red()
    red_light = true
    basic.pause(2000)
    Green()
    green_light = true
    basic.pause(2000)
    yellow()
    yellow_light = true
    basic.pause(2000)
}
function crosswalk () {
    yellow()
    basic.pause(10000)
    Red()
    basic.pause(10000)
}
input.onButtonPressed(Button.A, function () {
    dobe = true
    crosswalk()
    countdown = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(countdown)
        countdown += -1
    }
    basic.showIcon(IconNames.No)
    basic.pause(500)
    dobe = false
})
input.onButtonPressed(Button.B, function () {
    dobe = true
    crosswalk()
    countdown = 10
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(countdown)
        countdown += -1
    }
    basic.showIcon(IconNames.No)
    basic.pause(500)
    dobe = false
})
function yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sensor () {
    distance = 6
    countdown = counter
    basic.showNumber(counter)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        if (distance < 5) {
            counter += 1
            basic.showNumber(counter)
        }
        if (counter == 4) {
            counter += 0
        }
    }
}
function Green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let counter = 0
let distance = 0
let range: neopixel.Strip = null
let yellow_light = false
let green_light = false
let red_light = false
let dobe = false
let strip: neopixel.Strip = null
let countdown = 0
radio.setGroup(255)
basic.showIcon(IconNames.No)
countdown = 0
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(58)
basic.forever(function () {
    if (dobe == false) {
        lights()
    }
})
basic.forever(function () {
    sensor()
})
