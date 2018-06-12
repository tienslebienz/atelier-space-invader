import Keyboarder, { KEYS } from './keyboarder';

export default class Player {
    constructor(game, gameSize) {
        this.size = { x: 15, y: 15 };
        this.game = game;
        this.center = {
            x: gameSize.x / 2,
            y: gameSize.y - this.size.x,
        };
        this.keyboarder = new Keyboarder();
    }

    update() {
        if (this.keyboarder.isDown(KEYS.LEFT)) {
            this.center.x -= 2;
        }
        if (this.keyboarder.isDown(KEYS.RIGHT)) {
            this.center.x += 2;
        }
    }
}
