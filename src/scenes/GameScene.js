class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        
    }

    create() {
        this.add.text(180, 180, 'GameScene', {
            font: '48px Arial',
            fill: '#f8f8f2'
        })
    }

    update() {

    }
}

export default GameScene;
