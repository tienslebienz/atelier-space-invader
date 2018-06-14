import Keyboarder, { KEYS } from './keyboarder';
import Sounds from './sound';
import Bullet from './bullet';

export default class Player {
    constructor(game, gameSize) {
        this.size = { x: 15, y: 15 };
        this.game = game;
        this.center = {
            x: gameSize.x / 2,
            y: gameSize.y - this.size.x,
        };
        this.keyboarder = new Keyboarder();
        this.sounds = new Sounds();
    }

    update() {
        if (this.keyboarder.isDown(KEYS.LEFT)) {
            this.center.x -= 2;
        }
        if (this.keyboarder.isDown(KEYS.RIGHT)) {
            this.center.x += 2;
        }

        if (this.keyboarder.isDown(KEYS.SPACE)) {
            const bulletCenter = {
                x: this.center.x,
                y: this.center.y - this.size.x,
            };
            const bulletVelocity = { x: 0, y: -6 };
            const bullet = new Bullet(bulletCenter, bulletVelocity);

            this.game.addBody(bullet);
            this.sounds.pew();
        }
    }
}
