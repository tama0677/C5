input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        for (let index = 0; index < 4; index++) {
            pins.servoSetPulse(AnalogPin.P0, 1500)
            pins.servoWritePin(AnalogPin.P0, 90)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        for (let index = 0; index < 4; index++) {
            pins.servoSetPulse(AnalogPin.P0, 1500)
            pins.servoWritePin(AnalogPin.P0, 180)
        }
    }
})
