function initPembuat() {
    scene.setBackgroundImage(assets.image`
        Pembuat
        `)
    story.printText("Pembuat Yohan Adi Setiawan sebagai Guru Informatika/KKA", 75, 110, 15)
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (posisi_menu == 2 || posisi_menu == 3) {
        initMenu()
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (posisi_menu == 1) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
    
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function on_status_reached_comparison_lte_type_fixed(status: StatusBarSprite) {
    game.setGameOverEffect(false, effects.bubbles)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverPlayable(false, music.melodyPlayable(music.siren), false)
    game.reset()
})
info.onScore(100, function on_on_score() {
    game.gameOver(true)
    game.setGameOverPlayable(true, music.melodyPlayable(music.sonar), false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (posisi_menu == 1) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    statusbar.value += -1
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    submarine.startEffect(effects.fire, 200)
    karang.setFlag(SpriteFlag.AutoDestroy, true)
})
function initBantuan() {
    scene.setBackgroundImage(assets.image`
        Cover
        `)
    story.printDialog("Gunakan tombol panah untuk gerak! Hindari karang dan Ikan, dan ambil Sampah plastik", 80, 100, 60, 150, 15)
}

function initMenu() {
    
    music.stopAllSounds()
    scene.setBackgroundImage(img`
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
        `)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
    posisi_menu = 0
    story.startCutscene(function on_start_cutscene() {
        
        story.showPlayerChoices("Main", "Bantuan", "Pembuat")
        if (story.checkLastAnswer("Main")) {
            posisi_menu = 1
            music.stopAllSounds()
            initSelam()
            initKarang()
        } else if (story.checkLastAnswer("Bantuan")) {
            posisi_menu = 2
            initBantuan()
        } else {
            posisi_menu = 3
            initPembuat()
        }
        
        story.cancelAllCutscenes()
    })
}

function initKarang() {
    
    for (let index = 0; index < 5; index++) {
        karang = sprites.create(assets.image`
            karang
            `, SpriteKind.Projectile)
        scaling.scaleToPercent(karang, 40, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        karang.setPosition(randint(1, 115), randint(80, 100))
        while (karang.overlapsWith(karang)) {
            karang.setPosition(randint(1, 115), randint(80, 100))
        }
    }
}

function initSampah() {
    
    sampah = sprites.create(assets.image`
            sampah_plastik
            `, SpriteKind.Enemy)
    scaling.scaleToPercent(sampah, 25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sampah.setPosition(randint(10, 140), 10)
    sampah.setVelocity(0, 50)
}

function initSelam() {
    
    scene.setBackgroundImage(assets.image`
        lautdalam
        `)
    submarine = sprites.create(assets.image`
        selam
        `, SpriteKind.Player)
    scaling.scaleToPercent(submarine, 30, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    submarine.setStayInScreen(true)
    controller.moveSprite(submarine)
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.max = 10
    statusbar.attachToSprite(submarine, 0, 0)
    info.setLife(3)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    info.changeScoreBy(1)
    sprites.destroy(sampah, effects.spray, 500)
})
let sampah : Sprite = null
let karang : Sprite = null
let submarine : Sprite = null
let statusbar : StatusBarSprite = null
let posisi_menu = 0
initMenu()
game.onUpdateInterval(1000, function on_update_interval() {
    if (posisi_menu == 1) {
        initSampah()
    }
    
})
