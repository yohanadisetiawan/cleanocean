controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    game.setGameOverEffect(false, effects.bubbles)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverPlayable(false, music.melodyPlayable(music.siren), false)
    game.reset()
})
info.onScore(100, function () {
    game.gameOver(true)
    game.setGameOverPlayable(true, music.melodyPlayable(music.sonar), false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    submarine.startEffect(effects.fire, 200)
    karang.setFlag(SpriteFlag.AutoDestroy, true)
})
function initMenu () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
    story.startCutscene(function () {
        story.showPlayerChoices("Main", "Bantuan", "Pembuat")
        if (story.checkLastAnswer("Main")) {
            music.stopAllSounds()
            initSelam()
            initKarang()
        } else if (story.checkLastAnswer("Bantuan")) {
        	
        } else {
        	
        }
        story.cancelAllCutscenes()
    })
}
function initKarang () {
    for (let index = 0; index <= 4; index++) {
        karang = sprites.create(assets.image`karang`, SpriteKind.Projectile)
        scaling.scaleToPercent(karang, 40, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        karang.setPosition(randint(1, 115), randint(80, 100))
        while (karang.overlapsWith(karang)) {
            karang.setPosition(randint(1, 115), randint(80, 100))
        }
    }
}
function initSampah () {
    sampah = sprites.create(assets.image`sampah_plastik`, SpriteKind.Enemy)
    scaling.scaleToPercent(sampah, 25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sampah.setPosition(randint(10, 140), 10)
    sampah.setVelocity(0, 50)
}
function initSelam () {
    submarine = sprites.create(assets.image`selam`, SpriteKind.Player)
    scaling.scaleToPercent(submarine, 30, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    submarine.setStayInScreen(true)
    controller.moveSprite(submarine)
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.max = 50
    statusbar.attachToSprite(submarine, 0, 0)
    info.setLife(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sampah, effects.spray, 500)
})
let sampah: Sprite = null
let karang: Sprite = null
let submarine: Sprite = null
let statusbar: StatusBarSprite = null
scene.setBackgroundImage(assets.image`lautdalam`)
initMenu()
game.onUpdateInterval(1000, function () {
    if (story.isMenuOpen()) {
    	
    } else {
        initSampah()
    }
})
