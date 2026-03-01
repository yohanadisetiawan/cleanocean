def on_left_pressed():
    music.play(music.melody_playable(music.pew_pew),
        music.PlaybackMode.UNTIL_DONE)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    music.play(music.melody_playable(music.pew_pew),
        music.PlaybackMode.UNTIL_DONE)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    if info.score() > 0:
        info.change_score_by(-1)
    submarine.start_effect(effects.fire, 200)
    karang.set_flag(SpriteFlag.AUTO_DESTROY, True)
    music.play(music.melody_playable(music.beam_up),
        music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def initKarang():
    global karang
    for index in range(5):
        karang = sprites.create(assets.image("""
            karang
            """), SpriteKind.projectile)
        scaling.scale_to_percent(karang, 40, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        karang.set_position(randint(1, 115), randint(80, 100))
        while karang.overlaps_with(karang):
            karang.set_position(randint(1, 115), randint(80, 100))
def initSelam():
    global submarine
    submarine = sprites.create(assets.image("""
        selam
        """), SpriteKind.player)
    scaling.scale_to_percent(submarine, 30, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    submarine.set_stay_in_screen(True)
    controller.move_sprite(submarine)
karang: Sprite = None
submarine: Sprite = None
scene.set_background_image(assets.image("""
    lautdalam
    """))
initSelam()
initKarang()