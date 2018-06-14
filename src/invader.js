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

        if (Math.random() > 0.995 && !this.game.invadersBelow(this)) {
            const bulletCenter = {
                x: this.center.x,
                y: this.center.y + this.size.x,
            };
            const bulletVelocity = { x: Math.random() - 0.5, y: 2 };
            const bullet = new Bullet(bulletCenter, bulletVelocity);

            this.game.addBody(bullet);
        }
    }
}
