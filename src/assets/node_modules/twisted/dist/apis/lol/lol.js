"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("./match/match");
const league_1 = require("./league/league");
const summoner_1 = require("./summoner/summoner");
const thirdPartyCode_1 = require("./thirdPartyCode/thirdPartyCode");
const champion_1 = require("./champion/champion");
const spectator_1 = require("./spectator/spectator");
const status_1 = require("./status/status");
const DataDragonService_1 = require("./dataDragon/DataDragonService");
const seed_1 = require("./seed/seed");
const base_api_lol_1 = require("./base/base.api.lol");
/**
 * Classic league of legends api
 */
class LolApi extends base_api_lol_1.BaseApiLol {
    constructor() {
        super(...arguments);
        /**
         * Match methods
         */
        this.Match = new match_1.MatchApi(this.getParam());
        /**
         * League methods
         */
        this.League = new league_1.LeagueApi(this.getParam());
        /**
         * Summoner methods
         */
        this.Summoner = new summoner_1.SummonerApi(this.getParam());
        /**
         * Third Party methods
         */
        this.ThirdPartyCode = new thirdPartyCode_1.ThirdPartyCode(this.getParam());
        /**
         * Champion mastery
         */
        this.Champion = new champion_1.ChampionApi(this.getParam());
        /**
         * Spectator methods
         */
        this.Spectator = new spectator_1.SpectatorApi(this.getParam());
        /**
         * Status methods
         */
        this.Status = new status_1.StatusApi(this.getParam());
        /**
         * Data dragon
         */
        this.DataDragon = new DataDragonService_1.DataDragonService();
        /**
         * Seed methods
         */
        this.Seed = new seed_1.SeedApi();
    }
}
exports.LolApi = LolApi;
//# sourceMappingURL=lol.js.map