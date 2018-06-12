export const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
};

export default class Keyboarder {
    constructor() {
        this.keyState = {};

        window.onkeydown = event => this.keyState[event.keyCode] = true;
        window.onkeyup = event => this.keyState[event.keyCode] = false;
    }

    isDown(keyCode) {
        return this.keyState[keyCode];
    }
}
