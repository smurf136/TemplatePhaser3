let bg;
let sign01;
let sign02;
let sign03;
let sign04;
let text;
class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg', './src/assets/BGMenu.png')
        this.load.image('sign1', './src/assets/Sign1.png')
        this.load.image('sign2', './src/assets/Sign2.png')
        this.load.image('sign3', './src/assets/Sign3.png')
        this.load.image('sign4', './src/assets/Sign4.png')

    }

    create() {
        bg = this.add.image(0, 0, 'bg').setOrigin(0, 0)
        sign01 = this.add.image(0, 0, 'sign1').setScale(0.25)
        sign02 = this.add.image(0, 0, 'sign2').setScale(0.25)
        sign03 = this.add.image(0, 0, 'sign3').setScale(0.4)
        sign04 = this.add.image(0, 0, 'sign4').setScale(0.25)
        sign03.setPosition(this.cameras.main.centerX, 200)
        sign02.setPosition(this.cameras.main.centerX, 400)
        sign01.setPosition(this.cameras.main.centerX, 530)
        sign04.setPosition(this.cameras.main.centerX, 660)

        text = this.add.text(250, 180, 'Play', {
            font: '48px Arial',
            fill: '#000000'
        })

        //Change text to sign0x next commit 
        text.setInteractive();
        text.on('clicked', function(){
            this.scene.start('GameScene')
        }, this)


        this.input.on('gameobjectup', function (pointer, gameObject) {
            gameObject.emit('clicked', gameObject);
        }, this);

    }

    update() {

    }

}
export default MainMenu;
