import Deal from "../models/Deal"
import fetch from "node-fetch";
import { Request, Response } from 'express'

export const getDeals = async (req: Request, res: Response) => {
  const deals = await Deal.find();
  res.json({ deals: [...deals], status: 200 });
};

export const setDeals = async (req: Request, res: Response) => {
  await Deal.deleteMany({});
  const dealsFetched = await fetch(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50"
  );
  const dealsData = await dealsFetched.json();
  dealsData.forEach(async (deal:any) => {
    const newDeal = new Deal({
      title: deal.title,
      dealID: deal.dealID,
      storeID: deal.storeID,
      gameID: deal.gameID,
      salePrice: deal.salePrice,
      normalPrice: deal.normalPrice,
      isOnSale: deal.isOnSale,
      metacriticScore: deal.metacriticScore,
      steamRatingText: deal.steamRatingText,
      steamRatingPercent: deal.steamRatingPercent,
      steamRatingCount: deal.steamRatingCount,
      steamAppID: deal.steamAppID,
      releaseDate: deal.releaseDate,
      lastChange: deal.lastChange,
      dealRating: deal.dealRating,
      thumb: deal.thumb,
    });
    await newDeal.save();
  });
  res.json({ status: 200, message: "Deals added" });
};
