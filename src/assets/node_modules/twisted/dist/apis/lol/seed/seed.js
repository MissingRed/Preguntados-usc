"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const dataSeed_1 = require("../../../constants/dataSeed");
class SeedApi {
    constructor() {
        this.baseUrl = dataSeed_1.DataSeed.BASE;
    }
    request(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${this.baseUrl}/${path}`;
            const options = {
                uri,
                method: 'GET',
                json: true
            };
            return request_promise_1.default(options);
        });
    }
    matches(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id < 1 || id > 10) {
                throw new Error('Invalid index');
            }
            const path = `matches${id}.json`;
            return this.request(path);
        });
    }
}
exports.SeedApi = SeedApi;
//# sourceMappingURL=seed.js.map