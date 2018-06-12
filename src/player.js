export default class Player {
    constructor(game, gameSize) {
        this.size = { x: 15, y: 15 };
        this.game = game;
        this.center = {
            x: gameSize.x / 2,
            y: gameSize.y - this.size.x,
        };
    }

    update() {
    }
}
