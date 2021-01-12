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
exports.setDeals = exports.getDeals = void 0;
const Deal_1 = __importDefault(require("../models/Deal"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const getDeals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deals = yield Deal_1.default.find();
    res.json({ deals: [...deals], status: 200 });
});
exports.getDeals = getDeals;
const setDeals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Deal_1.default.deleteMany({});
    const dealsFetched = yield node_fetch_1.default("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50");
    const dealsData = yield dealsFetched.json();
    dealsData.forEach((deal) => __awaiter(void 0, void 0, void 0, function* () {
        const newDeal = new Deal_1.default({
            title: deal.title,
            dealID: deal.dealID,
            storeID: deal.storeID,
            gameID: deal.gameID,
            salePrice: deal.salePrice,
            normalPrice: deal.normalPrice,
            isOnSale: deal.isOnSale,
            metacriticScore: deal.metacriticScore,
            steamRatingText: deal.steamRatingText,
            steamRatingPercent: deal.steamRatingPercent,
            steamRatingCount: deal.steamRatingCount,
            steamAppID: deal.steamAppID,
            releaseDate: deal.releaseDate,
            lastChange: deal.lastChange,
            dealRating: deal.dealRating,
            thumb: deal.thumb,
        });
        yield newDeal.save();
    }));
    res.json({ status: 200, message: "Deals added" });
});
exports.setDeals = setDeals;
