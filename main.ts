radio.onReceivedNumber(function (receivedNumber) {
    Green()
    dobe = (0 as any) == (true as any)
})
function lights () {
    Red()
    red_light = true
    basic.pause(34000)
    Green()
    green_light = true
    basic.pause(56000)
    yellow()
    yellow_light = true
    basic.pause(4000)
}
function crosswalk () {
    Red()
    basic.pause(2000)
}
input.onButtonPressed(Button.A, function () {
    dobe = true
    crosswalk()
    basic.showIcon(IconNames.Yes)
    basic.pause(15000)
    countdown = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown += -1
    }
    basic.showIcon(IconNames.No)
    basic.pause(500)
    dobe = false
})
input.onButtonPressed(Button.B, function () {
    dobe = true
    crosswalk()
    basic.showIcon(IconNames.Yes)
    basic.pause(15000)
    countdown = 10
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(countdown)
        basic.pause(1000)
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
let distance = 0
let counter = 0
let range: neopixel.Strip = null
let countdown = 0
let yellow_light = false
let green_light = false
let red_light = false
let dobe = false
let strip: neopixel.Strip = null
radio.setGroup(255)
basic.showIcon(IconNames.No)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(58)
basic.forever(function () {
    if (dobe == false) {
        lights()
    }
})
basic.forever(function () {
    counter = 0
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 1)
        distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        if (distance < 10) {
            counter += 1
        }
    }
    if (counter == 4) {
        Green()
    }
})
