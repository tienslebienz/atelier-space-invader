import 'babel-polyfill';

import Game from './game';

/* global module */
if (module.hot) {
    module.hot.dispose(function () {
        window.location.reload();
    });
}

window.onload = () => {
    new Game('game');
};
