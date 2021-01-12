import { Schema, model } from "mongoose";

const gameSchema = new Schema({
  gameID: String,
  steamAppID: String,
  cheapest: Number,
  external: String,
  internalName: String,
  thumb: String,
});

export default model("Game", gameSchema);
