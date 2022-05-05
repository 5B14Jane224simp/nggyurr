input.onButtonPressed(Button.A, function () {
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . # # # .
    . # . # .
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
	
})
