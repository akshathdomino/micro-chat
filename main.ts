input.onButtonPressed(Button.A, function () {
    radio.sendString("Micro Chat!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Faaah")
})
radio.setGroup(1)
