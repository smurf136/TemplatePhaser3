let bg;
let sign01;
let sign02;
let sign03;
let sign04;
let Mtext;
let Stext01;
let Stext02;
let Stext03;
let Stext04;
let signP;
let con01;
let con02;
let con03;
let con04;

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
        sign01 = this.add.image(0, 0, 'sign3').setScale(0.4)
        sign02 = this.add.image(0, 0, 'sign1').setScale(0.25)
        sign03 = this.add.image(0, 0, 'sign2').setScale(0.25)
        sign04 = this.add.image(0, 0, 'sign4').setScale(0.25)
        // sign03.setPosition(this.cameras.main.centerX, 200)
        // sign02.setPosition(this.cameras.main.centerX, 400)
        // sign01.setPosition(this.cameras.main.centerX, 530)
        // sign04.setPosition(this.cameras.main.centerX, 660)

        Mtext = this.add.text(0, 0, 'Name', {
            font: '48px Arial',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5)
        Stext01 = this.add.text(0, 0, 'Play', {
            font: '48px Arial',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5)
        Stext02 = this.add.text(0, 0, 'Setting', {
            font: '48px Arial',
            fill: '#0000000',
            align: 'center'
        }).setOrigin(0.5)
        Stext03 = this.add.text(0, 0, 'Quit', {
            font: '48px Arial',
            fill: '#000000',
            align: 'center'
        }).setOrigin(0.5)

        con01 = this.add.container(300, 50, [sign01, Mtext]).setScale(1)
        con02 = this.add.container(300, 50, [sign02, Stext01]).setScale(1)
        con03 = this.add.container(300, 50, [sign03, Stext02]).setScale(1)
        con04 = this.add.container(300, 50, [sign04, Stext03]).setScale(1)
        console.log('con01.x: ' + con01.x + ', con01.y: ' + con01.y)
        //Change text to sign0x next commit 
        Stext01.setInteractive();
        Stext01.on('clicked', function () {
            this.scene.start('GameScene')
        }, this)


        this.input.on('gameobjectup', function (pointer, gameObject) {
            gameObject.emit('clicked', gameObject);
        }, this);



        // prototype
        // signP = this.add.image(0, 0, 'sign1').setScale(0.25)
        // sign01 = this.add.group()
        // sign01.createMultiple({
        //     key: 'sign1',
        //     repeat: 1
        // });
        var _this = this
        // sign01.children.iterate(function (child) {
        // sign01.x = 300oo
        // sign01.y = 100
        // sign01.setScale(0.35)

        _this.tweens.add({
            targets: con01,
            props: {
                y: {
                    value: 200,
                    duration: 1500
                }
            }
        });
        _this.tweens.add({
            targets: con02,
            props: {
                y: {
                    value: 400,
                    duration: 1500
                }
            }
        });
        _this.tweens.add({
            targets: con03,
            props: {
                y: {
                    value: 550,
                    duration: 1500
                }
            }
        });
        _this.tweens.add({
            targets: con04,
            props: {
                y: {
                    value: 700,
                    duration: 1500
                }
            }
        });

        con01.setDepth(1)


    }

    update() {

    }

}
export default MainMenu;
