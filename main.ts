input.onButtonPressed(Button.A, function () {
    if (QB.get(LedSpriteProperty.X) > 0) {
        QB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    QB.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    if (QB.get(LedSpriteProperty.X) < 4) {
        QB.change(LedSpriteProperty.X, 1)
    }
})
let Opponent5: game.LedSprite = null
let Opponent4: game.LedSprite = null
let Opponent3: game.LedSprite = null
let Opponent2: game.LedSprite = null
let Opponent1: game.LedSprite = null
let gameOn = false
let QB: game.LedSprite = null
basic.showString("ENDZONE")
music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
let DOWN = 1
basic.pause(150)
basic.forever(function () {
    QB = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(150)
        if (QB.get(LedSpriteProperty.Y) == 0) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                . . # . .
                `)
            game.addScore(1)
            basic.showNumber(game.score())
            basic.pause(2000)
        }
        if (DOWN > 5) {
            gameOn = false
        }
        while (gameOn == false) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        Opponent1 = game.createSprite(0, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (Opponent1.get(LedSpriteProperty.Y) == 4) {
                Opponent1.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
            if (QB.isTouching(Opponent1)) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showString("" + (DOWN))
                QB.delete()
                Opponent1.delete()
                Opponent1 = game.createSprite(0, 0)
                QB = game.createSprite(2, 4)
                DOWN += 1
                basic.pause(1000)
            } else if (QB.get(LedSpriteProperty.Y) == 0) {
                QB.delete()
                Opponent1.delete()
                DOWN = 0
                QB = game.createSprite(2, 4)
                Opponent1 = game.createSprite(0, 0)
                basic.pause(2000)
            }
            Opponent1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        Opponent2 = game.createSprite(1, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (Opponent2.get(LedSpriteProperty.Y) == 4) {
                Opponent2.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
            if (QB.isTouching(Opponent2)) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showString("" + (DOWN))
                QB.delete()
                Opponent2.delete()
                Opponent2 = game.createSprite(1, 0)
                QB = game.createSprite(2, 4)
                DOWN += 1
                basic.pause(1000)
            } else if (QB.get(LedSpriteProperty.Y) == 0) {
                QB.delete()
                Opponent2.delete()
                DOWN = 0
                QB = game.createSprite(2, 4)
                Opponent2 = game.createSprite(1, 0)
                basic.pause(2000)
            }
            Opponent2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        Opponent3 = game.createSprite(2, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (Opponent3.get(LedSpriteProperty.Y) == 4) {
                Opponent3.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
            if (QB.isTouching(Opponent3)) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showString("" + (DOWN))
                QB.delete()
                Opponent3.delete()
                Opponent3 = game.createSprite(2, 0)
                QB = game.createSprite(2, 4)
                DOWN += 1
                basic.pause(1000)
            } else if (QB.get(LedSpriteProperty.Y) == 0) {
                QB.delete()
                Opponent3.delete()
                DOWN = 0
                QB = game.createSprite(2, 4)
                Opponent3 = game.createSprite(2, 0)
                basic.pause(2000)
            }
            Opponent3.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        Opponent4 = game.createSprite(3, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (Opponent4.get(LedSpriteProperty.Y) == 4) {
                Opponent4.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
            if (QB.isTouching(Opponent4)) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showString("" + (DOWN))
                QB.delete()
                Opponent4.delete()
                Opponent4 = game.createSprite(3, 0)
                QB = game.createSprite(2, 4)
                DOWN += 1
                basic.pause(1000)
            } else if (QB.get(LedSpriteProperty.Y) == 0) {
                QB.delete()
                Opponent4.delete()
                DOWN = 0
                QB = game.createSprite(2, 4)
                Opponent4 = game.createSprite(3, 0)
                basic.pause(2000)
            }
            Opponent4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        Opponent5 = game.createSprite(4, 0)
        basic.pause(randint(0, 5000))
        while (gameOn == true) {
            if (Opponent5.get(LedSpriteProperty.Y) == 4) {
                Opponent5.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
            if (QB.isTouching(Opponent5)) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
                basic.showString("" + (DOWN))
                QB.delete()
                Opponent5.delete()
                Opponent5 = game.createSprite(4, 0)
                QB = game.createSprite(2, 4)
                DOWN += 1
                basic.pause(1000)
            } else if (QB.get(LedSpriteProperty.Y) == 0) {
                QB.delete()
                Opponent5.delete()
                DOWN = 0
                QB = game.createSprite(2, 4)
                Opponent5 = game.createSprite(4, 0)
                basic.pause(2000)
            }
            Opponent5.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
