input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 1; index++) {
        basic.showString("ACIDO LATTICO")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 2; index++) {
        basic.showString("CO2 H2O")
    }
})
basic.forever(function () {
	
})
