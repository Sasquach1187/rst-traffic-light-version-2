function lights () {
    Red()
    basic.pause(2000)
    Green()
    basic.pause(2000)
    yellow()
    basic.pause(2000)
}
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
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let dobe = false
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.showString("" + (distance))
    basic.pause(2000)
    if (distance >= 20) {
        dobe = true
    }
})
basic.forever(function () {
    if (dobe == false) {
        lights()
    }
    if (dobe == true) {
        control.reset()
    }
})
