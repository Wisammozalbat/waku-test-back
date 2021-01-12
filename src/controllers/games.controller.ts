import Game from "../models/Game";
import fetch from "node-fetch";
import {Request, Response} from 'express'

export const getGames = async (req:Request, res:Response) => {
  const games = await Game.find();
  res.json({ games: [...games], status: 200 });
};

export const setGames = async (req:Request, res:Response) => {
  try {
    await Game.deleteMany({});
    const gamesFetched = await fetch(
      "https://www.cheapshark.com/api/1.0/games?title=batman&limit=30"
    );
    const gamesData = await gamesFetched.json();
    gamesData.forEach(async (game:any) => {
      const newGame = new Game({
        gameID: game.gameID,
        steamAppID: game.steamAppID,
        cheapest: game.cheapest,
        external: game.external,
        thumb: game.thumb,
      });
      await newGame.save();
    });
    res.json({ status: 200, message: "Games added" });
  } catch (error) {
    res.json({ status: 404, message: "Something went wrong" });
  }
};

export const getGamesByCoincidance = async (req:Request, res:Response) => {
  const games = await Game.find();
  res.json({ games: [...games], status: 200 });
};

export const setGamesByCoincidance = async (req:Request, res:Response) => {
  await Game.deleteMany({});

  const { value } = req.body;
  const gamesFetched = await fetch(
    `https://www.cheapshark.com/api/1.0/games?title=${value}&limit=30`
  );
  const gamesData = await gamesFetched.json();
  gamesData.forEach(async (game:any) => {
    const newGame = new Game({
      gameID: game.gameID,
      steamAppID: game.steamAppID,
      cheapest: game.cheapest,
      external: game.external,
      thumb: game.thumb,
    });
    await newGame.save();
  });
  res.json({ status: 200, message: "Games added" });
};
