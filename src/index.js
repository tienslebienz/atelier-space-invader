import 'babel-polyfill';

/* global module */
if (module.hot) {
    module.hot.dispose(function () {
        window.location.reload();
    });
}
