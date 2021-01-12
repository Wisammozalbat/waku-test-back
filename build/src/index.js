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
require("dotenv").config();
require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const games_1 = __importDefault(require("./routes/games"));
const deals_1 = __importDefault(require("./routes/deals"));
const session_1 = __importDefault(require("./routes/session"));
const app = express_1.default();
//settings
app.set("port", process.env.PORT || 4000);
//middlerwares
app.use(cors_1.default());
app.use(express_1.default.json());
//routes
app.use("/games", games_1.default);
app.use("/deals", deals_1.default);
app.use("/session", session_1.default);
module.exports = app;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield app.listen(app.get("port"));
    console.log("server on port " + app.get("port"));
});
main();
