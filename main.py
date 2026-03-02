def initPembuat():
    scene.set_background_image(assets.image("""
        Pembuat
        """))
    story.print_text("Pembuat Yohan Adi Setiawan sebagai Guru Informatika/KKA",
        75,
        110,
        15)

def on_a_pressed():
    if posisi_menu == 2 or posisi_menu == 3:
        initMenu()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    if posisi_menu == 1:
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.UNTIL_DONE)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_status_reached_comparison_lte_type_fixed(status):
    game.set_game_over_effect(False, effects.bubbles)
    game.set_game_over_message(False, "GAME OVER!")
    game.set_game_over_playable(False, music.melody_playable(music.siren), False)
    game.reset()
statusbars.on_status_reached(StatusBarKind.energy,
    statusbars.StatusComparison.LTE,
    statusbars.ComparisonType.FIXED,
    0,
    on_status_reached_comparison_lte_type_fixed)

def on_on_score():
    game.game_over(True)
    game.set_game_over_playable(True, music.melody_playable(music.sonar), False)
info.on_score(100, on_on_score)

def on_right_pressed():
    if posisi_menu == 1:
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.UNTIL_DONE)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    statusbar.value += -1
    music.play(music.melody_playable(music.beam_up),
        music.PlaybackMode.UNTIL_DONE)
    submarine.start_effect(effects.fire, 200)
    karang.set_flag(SpriteFlag.AUTO_DESTROY, True)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def initBantuan():
    scene.set_background_image(assets.image("""
        Cover
        """))
    story.print_dialog("Gunakan tombol panah untuk gerak! Hindari karang dan Ikan, dan ambil Sampah plastik",
        80,
        100,
        60,
        150,
        15)
def initMenu():
    global posisi_menu
    music.stop_all_sounds()
    scene.set_background_image(img("""
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        888888888888888888888666666668888886666666666666666666666666666666666666666666666666666666666666666666666666666666666666666668888666666888888888888888888888888
        888888888888888888888888866666888888888888888888666666666666666666666666666666666666666666666666666886666666666666666666866666668888888888888888888888888888888
        888888888888888888888888888888888888888888866666666666666666888888886666666666666666666666666666666666666666666668888888666686668888888888888888888888888888888
        888888888888888888888888888888888888888888888886666666668888888666666666666666666666666666666666666666666668866666666666688888888888888888888888888888888888888
        888888888888888888888888888888888888888888888886666666688888868886666666666666666666666666666686666888888888888668888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888886666688888888886666666666666666666688888666666666666666888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888886666688888888888888888888866666666666666668888888888888888888666688888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888866666888886888888866688888888888866688886666888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888cc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888cebdc888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888fedbbdc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888ce4dc6ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888c44e4c6eb88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888e55e4db4e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888c455ee44ec88888888888888888888888888888888888888888888888888888888888888888888888868888888888868888888888888888888888888888888888888888888
        8888888888888888888888e54cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888e54cc888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888888888888888888888888888888888888888888888
        8888888888888888888888c45e8888888888888888888888888888888888888888888888888888888888888888888888888888888666888888888888888888888666888888888888888888888888888
        88888888888888888888888e54fcfcc888888888888888888888888888888888888888888888bb688888888888888888888888888886b68888888888888888888888888888888888888888888888888
        88888888888888888888888cecce7ddc88888888888888888888888888888888888888888888bec8886668888868888886688888888bcc8888886688888888886bb8888888888888888888888888888
        8888888888888888888888cce75d7dd7c8888888888888888888888888888888888888888888b4c86b44db6864444b88b44ddc88888b5c8888b44ddc8b4cc4b8b44b888888888888888888888888888
        888888888888888888888c45555796b54fc88888888888888888888888888888888888888888ddc8ddddddc6dddddb86dddddc88888bdc8886ddbddb8bdcbdb8bddb888888888888888888888888888
        888888888888888888888e5555557744eeeceeeeeeeecc888888888888888888888888888888d1c6ddc6ddc6dbcbdb8b1ccbcc88888b1b888b1bcbdb8b1bbbc861dc888888888888888888888888888
        88888888888888888888c45555554ee445575555555dd7c88888888888888888888888888866bcc6bbbbccc6cb6bcc8bcb6bcc88888b1b668bcb6bcc8bbbbcc86bbc888888888888888888888888888
        88888888888888888888f45554ee4455554555555555554ec8888888888888888888888886dbbbc8bbbbbbc6bbbbbb86bbbbbc88888bdddbc6bbbbbc86bbbbc86bbb888888888888888888888888888
        88888888888888888888c44ee44555555455555555555ee4cc888888888888888888888886bbbc888bbbbbc86dbddb886bbbbc88888bbbbbc86bbbbc886bbc886bbc888888888888888888888888888
        88888888888888888888fee455555555555555555555efce7e88888888888888888888888888888888888888dddddc88888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888cfe45555555555555554e4555efff5e88888888888888888888888888888888888888cbbbc888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888cd55555555555555554fcbe554fff55f88888886bbb888888888888888888888888888888888886bc888888888bbbb888bb88888888888888888888ccc86bc88888888888888
        88888888888888888ce7d5555555555554555efcbc5555e455c888888cbee4c8888888888888888888888688888888888cee888888888eeeeb88eec888888888888888bb88cec8cec88888888888888
        8888888888888888ce55555554e45555555554ffff55555444e888888c4bcec88bddddc8bdddbddb88bdd4d6886ddddb8b4dddc888888d4c44c8d4c86ddddb88b4db8b44bcbdc8b5bbdb88888888888
        888888888888888c44555555447b4455554555ebfe5555e544c888888cd1db88b1dd1dc8d1dd1dd1c8b1dddbc8cbdd1bcb1dd1b888888ddbd1c8ddc8d1ddbc8cbddc8b11dcb1b8b1b1dc88888888888
        88888888888888c745555555eebbcb455545555ee55eee4554c8888888cb1db8ddccbbc8dbccccb1c8bbcccccccccb1bcbdbcddc88888dbcccc8ddc6bbcccc8cccdc8cddc8bdb8bbd1c888888888888
        8888888cccc88c7545555554e6999be5555555544554e4555ec8888888bbbcbcbcc6bcc8bccbbcbcc8bcb6bbc6bbcb1bcccccbbc88888bbccc88bbcccbcbcc88bb1dccbbc8bcc8bcbbb888888888888
        8888888e55ecf45545555554b9999be455545554555555554c8888888bbbbbccbbbbbbc8bbcbbcbbc8bbbbbbc8bbbddbccbbcbbc88888bbc8888bbc8bbbbbbcbbbbbccbbbcbbc8bbbbbc88888888888
        8888888e555445554555555eb9999b445554555555555554e888888888bbbcc88bbbbbccbbcbbcbbc8bdbbbc88cbbbbcccbccbbc88888bbc8888bbc8cbbbbcccbbbc88cbbccbc8cbccbbc8888888888
        8888888f45445555555555544b99bee5555545555555544ef8888888888ccc8888cccc888c88cc8cc8bdccc88888ccc888cc8cc8888888c88888888888cccc888cc8888cc88cc88c88cc88888888888
        8888888fc4e45555455555554eebee4555555555555544ef8888888888888888888888888888888888bbc88888888888888888888888888888888888888888888888888888888888888888888888888
        88888888fce455554555555554eeee555555554554444ec888888888888888888888888888888888888c888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888fc55555555555555554555555555544444ecc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888fcf4555554555555555555555555444444eff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888cece5555554555555555555554444444ecc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888cffc444555445555555455444444444ec8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888ffffe444444444444444444444444ecc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888fceee4444444444444444444ecc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888ce44eeeeee44444444444eccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888fe444cf8ccccccccecfcc88888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888888888888888888888888
        88888888888e44ef88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888ceec888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888cbcc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888cbbbbbbf88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ccc88888888888cccccccccccbbeeebbbccccccccccccccccccccccccccccccccccccc888ccccccccccccccccccccccccccc8888888888cccccccccccccccccccccccccc88888888888888888888888
        cccccccccccccccccccccccdbbbbbbbbbeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccbbcccbbbbbbbbbbbbcccbbcccccccccbbbcccccbccbccccccccccccccccccccbbbbcccccccccccbbcccccbbbcccccccccccccccbbbbbccccccbccccccccccccccccccccccccccc
        bcccccbbbbbbbbbbbbbbebeeeebbbebbbbeccbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbebbbbbbcccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbebbbeebbbccebbbbbbbebebbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbeebbbbbbbbbbbbbbbbbbbbbbbe
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbebebbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbddddbbddddddddddddddddddddddbbbbbbbddddbbbddddddddddddbbbbbbbbbbbbbbbddddbbbbbbbbbb
        bbbbbbbbbddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
        dbbddbbbddddddddddddddbddbdbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddbddddbbdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdbbdddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbbbcddbbdddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbbbbbbbbddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddbbbbbdddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddbbbbbbdb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddbbb
        bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbddddbbbbbb
        dbbbbbbbbbdddbeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddbbbbbbbbbeee
        bbdddddddbbbbddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdbbbbbbbbbbbbbbbeeeeee
        bbbbbbbbbbbbbdbdbcbbbcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbddddbbbbbbbbbbbbbbbbeeeeee
        bbbbbbbbbbbbbbbcbbbbbbceebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbedbbddbbbbbbbbbbbbbbbbbbbbbeeeeeeee
        ebbbbbbbbbbbbbeccbbbbccbbbbbbddddddddddddddddddddddddbccccbdddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbebbeeeeee
        cceeebbbbbbbbbcccccccccbbbbbdbbbbbbbbbbbbbbbebbbdddbcbbbdbbbcddddddddddbbbdddddddddddddddddddddddddddddddddebbbbddddddbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee
        ccccceeeeeebbbbcccccccbbbbbbbbbdddbbbbbbdddbccccebbcbcbbbbbbbcbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbdbbbddbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbeeeebbb
        bbbeccccceeebbeecccccbbbbbbbbbbbbbbbbbbbbdbbbccbbbcbcccccbbccbcdddbbdddddbddddddddddddddddddddddddddbbbddbbbbbbbbdbbbbbbbdddddbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbd
        bbbddebbeccceebebbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbcbbcccccbbccbbbcbdddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbebb
        cebbbbbbbbcccceeebbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbccccccbccccccbdddbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbdbbbbbbbbbbbbbbbbbbbbbddddbbcebe
        ccebbbbbbbbebbbbddddddddbbbdddbbbbbebbbeeccccccccccccccccccccccbdbdddbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbeeeeebbdddddbbbbbbbbbbddddddbcbccbc
        bccbbbbebbbdeeeebbbbbbbbdddbddddddddbebbecccccccccccbcccccccceddbbbdddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbbbbbbbbeecceecccbbddddddddddddbbbcccccccc
        bdbccceeebdbbbeccccccccceebbbdbbbbbdddbbecccccccccebbeebbbbbdddbdddbebbdbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbdddddbbddbbddbbbbeeeeccebecccccccccbbbbbbbbccccccccccccc
        ccbcceecbcccccbbccccccccccccebbbddbbbdddbbbbeeeebbbbbbbddbddbbbbdbdbebbdddddbbbbbbbbbbbbbbbbbdbbbbdddddddbbbbbbbbbbbbbeeeebccbbccccccbccccccccccccccccccbcccccc
        ccbcccbcccbbbccdbbccbcccccbbccbbbbbbbbbbdddbbbbebbdbbbbbbbbbbbbbeeeeeebbbbbdbbbbbbbbbbbebbbbddbbbddddbbbbbebbbbbbeeccccceeeccbeccccbbebccccccccccccccbecccccccc
        bbbbbbbbcccbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbddbbbcccbbccccccbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcceececcccbbcbbbbbbbcbbddbbcbbbbbbbcccbbbbbbcccbbccbd
        cccccccccccccccbbbbbbbbccccccccccbbcbbbbbbccbbbbbbbbbbbbcbbbdbbbbbbbbbbbbbbdbbbbbbbbccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccbbbcccbbbbbccccccccbbbbbbbbbcbbbccccccccccccccccccccbcbbbbbbbbccccccccccbbcccccccccccbcbbbbbbbbbbbbbbbbbbbbbbcc
        ffffcffffccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccbcccccccccccbccffccccccfccccccccccccccccccccccccccccccccccccbbc
        fffffffffffffffffccc8cccffffffffffffff88fffcccccccccc88ccccff8ccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccc88cbbcccccccccc
        ffffffffffffffffffffffccfffffcffff888888ff8ccccccccccccccc888888cfffffcccccffccfccccccccccfff888ccccc8c88ff8ffff88f8888888ffff888cccccccccccccccccccccbbbebbbbb
        fffffffffffffffffffcc88888888cfffccccc88888cccccccccccc88888f88fff8cc888c8ffffbbcff8ccccfffffffff8ccccccccccccccccccccccccccccccccccccccccccccccccccbdbccbceebe
        ffffffff88ffffffffffff8ccccccfff8cccccccccccccccccccccccccccccc888ccccccccccccbccccccbdbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccecbeec
        cccccff8cccccffffffcffcccccccfffff8cccccccccccccfcccccccccccccccccccccccccccccccc88ccccccccccccccccccccccccbdbccccccccbbbccccccccccccccccccbbbbddbbecccccebbccb
        ccccccfccccccccfffcfccccccccffffffcccccccccccccfffccccccccccccccccc8fccccccc8cc8f8ffccccccccccccccccccccccddbddbebbbbdbbbbbccccccccccccbbccbbbbbecbcccccccccccc
        ccccccccccccccccccccbcbcccffccffff8ccccccbcccccffccbbbccccccccccccccff8ccfccccccfccccccccccccccccccccccbddbccbdeeccdbbebbebbccbbcbbbccbbccccbecbccccccccccccccc
        bccccbcbcccccccccccccccccccccbbbbcfcccccccbddccccddbbbbbbdbfffcccccccffcdbccccccbbdddbccccdbccbddddddddbbbcccdbccccbbccdeeeeccbebdbcccbccfcbeccccccccffcccccccc
        fcccccccccccbcccccccccccccbbbbbbdbcccccbcbddbdbbccccbbcfffcc88fcccccccbddddbbbddddddddddddebbddbbecebdbceecccdeccccdeccccebccdbcbeccccccccccccccccccccccccccccc
        fffccccccccccffcccccbbfffcccccccbbddbbbbbbeeecbbbcfccccfffcffffcfcccddbbebbdbeddebbbbbbbecbbbccccccccbccbeccbdecceedccccccccbeccccccccccccccbcccccccccccccccbcc
        ccbcccccccccccfcbcbfccfffccccccfdbebcbdbcbbbbccbbbbcffffbdbbcccbbbdbeececceceeedbceccccbccbdbcccccccccccccccbbeccececccbccccdcccccccccccfcccccccccccccccccccccc
        8cccff8888ccccccfcfccffffccccbcdbcbbdddddbbbbbccbcdddddddbbbddbbbdbeebcbdcccbbcbdccceccbecbbcccccccccbccccccbccfcccbcccccccbdbccbcccccccfccccccccbccccccbcccbcc
        8cc8888cccccccccccccffccbdddbbbeecddbbbcebccbbccecebbbebebeeeeeccbcbbcccbccdbccedcccebbbccbbcccccccbcccccbcccccccccdccccccbbbbccccccccfccccccccccbccccccccccccc
        ccccccccccccccccfffcbdddcbddbcbcbcbbcbbccbccebcccccceeebeeeccbcccdcebcccbbccccccccccccbeccbbcccccbccccccccccbccccfcccccccbbbbccccccccccfccfcbccccbccccccccccccc
        cccccccccc888ccbbbdddddbcbbbbccbecccccbcccccbccccccceeebbccbcecfcbcccccccbcfccccccccccbbccbccbcccccccccccccccccccfccccccbdebccccccccccffccccbccccccccccccccccbf
        ccccccccccccbddeeebdbbebcccccccbccccccbcceecbcccbcccceeccccbeccccebcccbccccfcccccccfcccccccbbcccbccccccccccccfcccfcccccbebccccbcccccccffcccccccccccccccccbcccbc
        cccccccccbbddeceeccccccbccccbbcccccbcccccbbccccccccccccccccbcccccccccccccccffccccccfcccccccccccbbccccccccccccccccfccccccbcccccccccccccffcfccccccccfccccccbcfccc
        cccbbccbdbbbebbcbdccccccfccccbcccccccccccccfcbccccccccccfcccccccccccccccfccccfccccffcccbcccccccccccbcccccccccccccffcccccccccccccffccccccfffcccccfccccccfbcccccc
        ddddddddecccbceecccbdcccccccccebccccbbcccccfcbccccccccccccccccfcccccccccfccccfccfffcccccccccccccccccccccccccccccffffcfffffcccccfffccccccccfcccccccccccccbccfccc
        bbeebcebccccbccbcccccccccccccbbbcccccccccccccccccccccfcccccccccccccccccccccccfffffcffcccccfcccccccccccccfffcccfffffccfffffffcccfffccffffcccffcfcffccccfccfffccf
        bcccccccbcccccccccccccccccccccccccccccccccccccccccccffccfccfccccfccccccccfccccfffccfffccccffffcffccccccffffccfffffffffffffffccfffffffffffffffffffffccffcfffffff
        cccbbccccccccccccfcbccfcccccccfcfcccccccccccccccccccffbcfcffcccfffcfffccffccfffcfcffcfcffffffccffffffcffffffffffffffffffffffcccffffffffffffcfffffffccffffffffff
        cccccbccccfcbcccdbccbcfccccffffcccccccccccccfffccccccfccfcffcccffffffffffffffcffcfffcffffffffffffffffffffffffffffffffffcfffffccfffffcffffffcfffffffffffffffccff
        ffffccfcccfcccccccccccffffffffffccffffcccfcfffffcffccffffffffffffffffffffffffcffcffffffffffffffffccffffffffffffffffffffcffffffffffffcfffffffffffffffffffffffcff
        cffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
        ccffcfcccccffcffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
        """))
    music.play(music.string_playable("E D G F B A C5 B ", 120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    posisi_menu = 0
    
    def on_start_cutscene():
        global posisi_menu
        story.show_player_choices("Main", "Bantuan", "Pembuat")
        if story.check_last_answer("Main"):
            posisi_menu = 1
            music.stop_all_sounds()
            initSelam()
            initKarang()
        elif story.check_last_answer("Bantuan"):
            posisi_menu = 2
            initBantuan()
        else:
            posisi_menu = 3
            initPembuat()
        story.cancel_all_cutscenes()
    story.start_cutscene(on_start_cutscene)
    
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
def initSampah():
    global sampah
    sampah = sprites.create(assets.image("""
            sampah_plastik
            """),
        SpriteKind.enemy)
    scaling.scale_to_percent(sampah, 25, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    sampah.set_position(randint(10, 140), 10)
    sampah.set_velocity(0, 50)
def initSelam():
    global submarine, statusbar
    scene.set_background_image(assets.image("""
        lautdalam
        """))
    submarine = sprites.create(assets.image("""
        selam
        """), SpriteKind.player)
    scaling.scale_to_percent(submarine, 30, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    submarine.set_stay_in_screen(True)
    controller.move_sprite(submarine)
    statusbar = statusbars.create(20, 4, StatusBarKind.energy)
    statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
    statusbar.max = 10
    statusbar.attach_to_sprite(submarine, 0, 0)
    info.set_life(3)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_score_by(1)
    sprites.destroy(sampah, effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

sampah: Sprite = None
karang: Sprite = None
submarine: Sprite = None
statusbar: StatusBarSprite = None
posisi_menu = 0
initMenu()

def on_update_interval():
    if posisi_menu == 1:
        initSampah()
game.on_update_interval(1000, on_update_interval)
