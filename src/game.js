import Player from './player';
import Invader from './invader';

function collinding(b1, b2) {
    return !(
        b1 === b2 ||
        b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
        b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
        b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
        b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    );
}

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
        this.bodies = this.bodies.filter(
            b1 => this.bodies.every(b2 => !collinding(b1, b2))
        );
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

    invadersBelow(invader) {
        return this.bodies.some(b =>
            b instanceof Invader &&
            b.center.y > invader.center.y &&
            b.center.x - invader.center.x < invader.size.x
        );
    }
}
