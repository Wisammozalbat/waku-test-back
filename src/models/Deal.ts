import { Schema, model } from "mongoose";

const dealSchema = new Schema({
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

export default model("Deal", dealSchema);
