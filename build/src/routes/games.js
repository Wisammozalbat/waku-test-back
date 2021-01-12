"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const games_controller_1 = require("../controllers/games.controller");
const verifyToken_1 = require("../middleware/verifyToken");
router.route("/").get(verifyToken_1.auth, games_controller_1.getGames).post(verifyToken_1.auth, games_controller_1.setGames);
router
    .route("/:name")
    .get(verifyToken_1.auth, games_controller_1.getGamesByCoincidance)
    .post(verifyToken_1.auth, games_controller_1.setGamesByCoincidance);
exports.default = router;
