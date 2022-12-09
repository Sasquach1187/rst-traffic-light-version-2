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
    basic.pause(2000)
    Red()
    basic.pause(2000)
}
input.onButtonPressed(Button.A, function () {
    dobe = true
    crosswalk()
    basic.pause(1000)
    countdown = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(countdown)
        countdown += -1
        basic.pause(500)
    }
    basic.pause(500)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    dobe = false
})
input.onButtonPressed(Button.B, function () {
    dobe = true
    crosswalk()
    basic.pause(1000)
    countdown = 10
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(countdown)
        countdown += -1
        basic.pause(500)
    }
    basic.pause(500)
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
let range: neopixel.Strip = null
let yellow_light = false
let green_light = false
let red_light = false
let strip: neopixel.Strip = null
let countdown = 0
let dobe = false
dobe = false
countdown = 0
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (dobe == false) {
        lights()
    }
})
