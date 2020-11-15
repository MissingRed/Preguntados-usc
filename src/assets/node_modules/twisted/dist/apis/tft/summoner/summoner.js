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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const endpoints_1 = require("../../../endpoints/endpoints");
const base_api_tft_1 = require("../base/base.api.tft");
/**
 * Summoner methods
 */
class SummonerTftApi extends base_api_tft_1.BaseApiTft {
    parsePath(endpoint, by) {
        let { path } = endpoint;
        if (by === "" /* ID */) {
            path = path.replace('/$(by)/', '/');
        }
        return path;
    }
    genericRequest(by, value, region) {
        const endpoint = _.cloneDeep(endpoints_1.endpointsTFTV1.Summoner);
        endpoint.path = this.parsePath(endpoint, by);
        const params = {
            summonerName: value,
            by
        };
        return this.request(region, endpoint, params);
    }
    /**
     * Get by name
     * @param summonerName Summoner name
     * @param region Riot region
     */
    getByName(summonerName, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest("by-name" /* NAME */, summonerName, region);
        });
    }
    /**
     * Get by id
     * @param id Summoner id
     * @param region Riot region
     */
    getById(id, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest("" /* ID */, id, region);
        });
    }
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByPUUID(puuid, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest("by-puuid" /* PUUID */, puuid, region);
        });
    }
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByAccountID(accountId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRequest("by-account" /* ACCOUNT_ID */, accountId, region);
        });
    }
}
exports.SummonerTftApi = SummonerTftApi;
//# sourceMappingURL=summoner.js.map