import Player from './player';
import Invader from './invader';

export default class Game {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        // drawing context to draw in the canvas
        this.screen = canvas.getContext('2d');
        this.gameSize = {
            x: canvas.height,
            y: canvas.width,
        };

        this.bodies = [];
        this.createPlayer();
        this.createInvaders();

        const tick = () => {
            this.update();
            this.draw();
            requestAnimationFrame(tick);
        }

        tick();
    }

    update() {
        this.bodies.forEach(body => body.update());
    }

    drawRect(body) {
        this.screen.fillRect(
            body.center.x - body.size.x / 2,
            body.center.y - body.size.y / 2,
            body.size.x,
            body.size.y,
        );
    }

    draw() {
        this.screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
        this.bodies.forEach(body => this.drawRect(body));
    }

    addBody(body) {
        this.bodies.push(body);
    }

    createInvaders() {
        for (let i = 0; i < 24; ++i) {
            const x = 30 + (i % 8) * 30;
            const y = 30 + (i % 3) * 30;
            this.addBody(new Invader(this, { x, y }));
        }
    }

    createPlayer() {
        this.addBody(new Player(this, this.gameSize))
    }
}
