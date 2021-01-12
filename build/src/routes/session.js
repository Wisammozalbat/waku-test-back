"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const session_controller_1 = require("../controllers/session.controller");
router.route("/login").post(session_controller_1.login);
exports.default = router;
