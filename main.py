def on_button_pressed_a():
    if QB.get(LedSpriteProperty.X) > 0:
        QB.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    QB.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if QB.get(LedSpriteProperty.X) < 4:
        QB.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Opponent1: game.LedSprite = None
gameOn = False
QB: game.LedSprite = None
basic.show_string("ENDZONE")
music.play_sound_effect(music.builtin_sound_effect(soundExpression.spring),
    SoundExpressionPlayMode.UNTIL_DONE)
DOWN = 1
basic.pause(150)

def on_forever():
    global QB, gameOn
    QB = game.create_sprite(2, 4)
    gameOn = True
    while gameOn == True:
        basic.pause(150)
    if QB.get(LedSpriteProperty.Y) == 0:
        game.add_score(1)
basic.forever(on_forever)

def on_forever2():
    global Opponent1, QB, DOWN, gameOn
    basic.pause(100)
    if gameOn == True:
        Opponent1 = game.create_sprite(0, 0)
        basic.pause(randint(0, 5000))
        while gameOn == True:
            if Opponent1.get(LedSpriteProperty.Y) == 4:
                Opponent1.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            else:
                if QB.is_touching(Opponent1):
                    music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
                        SoundExpressionPlayMode.UNTIL_DONE)
                    basic.clear_screen()
                    basic.show_string("1ST DOWN")
                    QB.delete()
                    Opponent1.delete()
                    Opponent1 = game.create_sprite(0, 0)
                    QB = game.create_sprite(2, 4)
                    DOWN += 1
                    basic.pause(1000)
                    if DOWN > 5:
                        gameOn = False
                    while gameOn == False:
                        game.game_over()
                elif QB.get(LedSpriteProperty.Y) == 0:
                    music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
                        SoundExpressionPlayMode.UNTIL_DONE)
                    basic.show_leds("""
                        # . . . #
                                                # . . . #
                                                # . . . #
                                                # # # # #
                                                . . # . .
                    """)
                    game.add_score(1)
                    basic.show_number(game.score())
                    QB.delete()
                    Opponent1.delete()
                    DOWN = 0
                    QB = game.create_sprite(2, 4)
                    Opponent1 = game.create_sprite(0, 0)
                    basic.pause(2000)
                Opponent1.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
basic.forever(on_forever2)
