radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        dayAlert()
    } else {
        nightAlert()
    }
})
// nighttime button
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(1)
})
function nightAlert () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P8, 1023)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P8, 0)
        basic.pause(500)
    }
}
function dayAlert () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 F C5 F C5 F C5 F ", 120)
    }
}
// daytime button
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(0)
})
radio.setGroup(171)
