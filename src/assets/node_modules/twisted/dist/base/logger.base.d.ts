import { IEndpoint } from '../endpoints/endpoints';
import { OptionsWithUri } from 'request';
export declare class Logger {
    private static parseName;
    static start(endpoint: IEndpoint): void;
    static end(endpoint: IEndpoint): void;
    static uri(options: OptionsWithUri, endpoint: IEndpoint): void;
    static rateLimit(endpoint: IEndpoint, ms: number): void;
}
