import { BaseApiTft } from './base/base.api.tft';
import { MatchTFTApi } from './match/match.tft';
import { SummonerTftApi } from './summoner/summoner';
import { TFTStaticFiles } from './static/static';
/**
 * TFT Api
 */
export declare class TftApi extends BaseApiTft {
    /**
     * Match methods
     */
    readonly Match: MatchTFTApi;
    /**
     * Summoner methods
     */
    readonly Summoner: SummonerTftApi;
    /**
     * Static files
     */
    readonly StaticFiles: TFTStaticFiles;
}
