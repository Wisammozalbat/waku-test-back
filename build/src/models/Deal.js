"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dealSchema = new mongoose_1.Schema({
    title: String,
    dealID: String,
    storeID: Number,
    gameID: Number,
    salePrice: Number,
    normalPrice: Number,
    isOnSale: Number,
    metacriticScore: Number,
    steamRatingText: String,
    steamRatingPercent: Number,
    steamRatingCount: Number,
    steamAppID: Number,
    releaseDate: Date,
    lastChange: Date,
    dealRating: Number,
    thumb: String,
});
exports.default = mongoose_1.model("Deal", dealSchema);
