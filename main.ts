// daytime button
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("day")
    radio.sendNumber(0)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        dayAlert()
    } else {
        nightAlert()
    }
})
function nightAlert () {
    basic.showString("night")
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(500)
    }
}
function dayAlert () {
    basic.showString("day")
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 F C5 F C5 F C5 F ", 120)
    }
}
// nighttime button
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("night")
    radio.sendNumber(1)
})
radio.setGroup(83)
