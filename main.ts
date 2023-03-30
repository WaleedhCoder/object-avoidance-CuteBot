let sonar = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
        }
        basic.pause(2000)
        cuteBot.motors(randint(-30, -50), 2)
        basic.pause(500)
    } else if (false) {
    	
    } else {
        cuteBot.forward()
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 15)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(15, 50)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    }
})
