import Player from './player';

export default class Game {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        // drawing context to draw in the canvas
        this.screen = canvas.getContext('2d');
        this.gameSize = {
            x: canvas.height,
            y: canvas.width,
        };

        this.bodies = [new Player(this, this.gameSize)];

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
        this.bodies.forEach(body => this.drawRect(body));
    }
}
