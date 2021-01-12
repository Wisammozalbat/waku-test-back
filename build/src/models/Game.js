"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    gameID: String,
    steamAppID: String,
    cheapest: Number,
    external: String,
    internalName: String,
    thumb: String,
});
exports.default = mongoose_1.model("Game", gameSchema);
