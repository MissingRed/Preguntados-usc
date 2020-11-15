"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function waiter(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
exports.waiter = waiter;
function getUrlFromOptions(options) {
    let uri = options.uri;
    if (options.qs) {
        uri += '?';
        for (const key in options.qs) {
            const value = encodeURIComponent(options.qs[key]);
            uri += `${key}=${value}`;
        }
    }
    return uri;
}
exports.getUrlFromOptions = getUrlFromOptions;
//# sourceMappingURL=base.utils.js.map