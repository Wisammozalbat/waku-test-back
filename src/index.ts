require("dotenv").config();
require("./database");

import express from 'express';
import cors from 'cors';
import games from "./routes/games";
import deals from "./routes/deals";
import session from "./routes/session";

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlerwares
app.use(cors());
app.use(express.json());
//routes
app.use("/games", games);
app.use("/deals", deals);
app.use("/session", session);

module.exports = app;

const main = async () => {
  await app.listen(app.get("port"));
  console.log("server on port " + app.get("port"));
};

main();
