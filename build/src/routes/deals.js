"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const deals_controller_1 = require("../controllers/deals.controller");
const verifyToken_1 = require("../middleware/verifyToken");
router.route("/").get(verifyToken_1.auth, deals_controller_1.getDeals).post(verifyToken_1.auth, deals_controller_1.setDeals);
exports.default = router;
