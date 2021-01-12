"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : "mongodb://localhost/apigames";
// const URI = "mongodb://localhost/apigames";
mongoose_1.default.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log("connection successful"))
    .catch(err => console.error(`There was an error: ${err}`));
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("BD is connected");
});
