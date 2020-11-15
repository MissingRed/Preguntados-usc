"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function regionToTftRegions(region) {
    switch (region) {
        // America
        case "NA1" /* AMERICA_NORTH */:
        case "BR1" /* BRAZIL */:
        case "LA1" /* LAT_NORTH */:
        case "LA2" /* LAT_SOUTH */:
        case "OC1" /* OCEANIA */:
            return "americas" /* AMERICAS */;
        // Europe
        case "EUN1" /* EU_EAST */:
        case "EUW1" /* EU_WEST */:
        case "TR1" /* TURKEY */:
        case "RU" /* RUSSIA */:
            return "europe" /* EUROPE */;
        // Asia
        case "JP1" /* JAPAN */:
        case "KR" /* KOREA */:
            return "asia" /* ASIA */;
    }
    throw new Error(`Unexpected region: ${region}`);
}
exports.regionToTftRegions = regionToTftRegions;
//# sourceMappingURL=regions.js.map