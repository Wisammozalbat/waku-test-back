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
exports.setGamesByCoincidance = exports.getGamesByCoincidance = exports.setGames = exports.getGames = void 0;
const Game_1 = __importDefault(require("../models/Game"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield Game_1.default.find();
    res.json({ games: [...games], status: 200 });
});
exports.getGames = getGames;
const setGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Game_1.default.deleteMany({});
        const gamesFetched = yield node_fetch_1.default("https://www.cheapshark.com/api/1.0/games?title=batman&limit=30");
        const gamesData = yield gamesFetched.json();
        gamesData.forEach((game) => __awaiter(void 0, void 0, void 0, function* () {
            const newGame = new Game_1.default({
                gameID: game.gameID,
                steamAppID: game.steamAppID,
                cheapest: game.cheapest,
                external: game.external,
                thumb: game.thumb,
            });
            yield newGame.save();
        }));
        res.json({ status: 200, message: "Games added" });
    }
    catch (error) {
        res.json({ status: 404, message: "Something went wrong" });
    }
});
exports.setGames = setGames;
const getGamesByCoincidance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield Game_1.default.find();
    res.json({ games: [...games], status: 200 });
});
exports.getGamesByCoincidance = getGamesByCoincidance;
const setGamesByCoincidance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Game_1.default.deleteMany({});
    const { value } = req.body;
    const gamesFetched = yield node_fetch_1.default(`https://www.cheapshark.com/api/1.0/games?title=${value}&limit=30`);
    const gamesData = yield gamesFetched.json();
    gamesData.forEach((game) => __awaiter(void 0, void 0, void 0, function* () {
        const newGame = new Game_1.default({
            gameID: game.gameID,
            steamAppID: game.steamAppID,
            cheapest: game.cheapest,
            external: game.external,
            thumb: game.thumb,
        });
        yield newGame.save();
    }));
    res.json({ status: 200, message: "Games added" });
});
exports.setGamesByCoincidance = setGamesByCoincidance;
