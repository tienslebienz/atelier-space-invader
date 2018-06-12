export default class Game {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        // drawing context to draw in the canvas
        this.screen = canvas.getContext('2d');
        this.gameSize = {
            x: canvas.height,
            y: canvas.width,
        };

        const tick = () => {
            this.update();
            this.draw();
            requestAnimationFrame(tick);
        }

        tick();
    }

    update() {
    }

    draw() {
        this.screen.fillRect(30, 30, 40, 40);
    }
}
