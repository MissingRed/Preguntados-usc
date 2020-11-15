"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_utils_1 = require("./base.utils");
class Logger {
    // Private methods
    static parseName(endpoint) {
        return `${endpoint.prefix}/${endpoint.path}`;
    }
    // Public methods
    static start(endpoint) {
        const name = Logger.parseName(endpoint);
        console.time(name);
    }
    static end(endpoint) {
        const name = Logger.parseName(endpoint);
        console.timeEnd(name);
    }
    static uri(options, endpoint) {
        const uri = base_utils_1.getUrlFromOptions(options);
        console.log(`Calling method url: ${uri} (${endpoint.path})`);
    }
    static rateLimit(endpoint, ms) {
        const name = Logger.parseName(endpoint);
        console.log(`Waiting ${(ms / 1000).toFixed(2)} seconds by rate limit (${name})`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.base.js.map