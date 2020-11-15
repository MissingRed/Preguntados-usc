"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const message = 'Generic error';
/**
 * Not api key found
 */
class GenericError extends Error {
    constructor(rateLimits, error) {
        super(error.message || message);
        this.name = 'GenericError';
        this.status = error.statusCode;
        this.body = _.get(error, 'response.body', null);
        this.rateLimits = rateLimits;
        this.error = error;
        Object.setPrototypeOf(this, GenericError.prototype);
    }
}
exports.GenericError = GenericError;
//# sourceMappingURL=Generic.error.js.map