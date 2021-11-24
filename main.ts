// daytime button
input.onPinPressed(TouchPin.P0, function () {
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
    for (let index = 0; index < 1; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
}
function dayAlert () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 F C5 F C5 F C5 F ", 120)
    }
}
// nighttime button
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(1)
})
radio.setGroup(83)
