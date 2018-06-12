import Bullet from './bullet';

export default class Invader {
    constructor(game, center) {
        this.size = { x: 15, y: 15 };
        this.game = game;
        this.center = center;
        this.patrolX = 0;
        this.speedX = 0.3;
    }

    update() {
        if (this.patrolX < 0 || this.patrolX > 40) {
            this.speedX = -this.speedX;
        }

        this.center.x += this.speedX;
        this.patrolX += this.speedX;
    }
}
