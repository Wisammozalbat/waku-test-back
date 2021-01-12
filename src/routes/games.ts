import { Router } from "express";
const router:Router = Router();
import {
  getGames,
  setGames,
  getGamesByCoincidance,
  setGamesByCoincidance,
} from "../controllers/games.controller";
import {auth} from "../middleware/verifyToken";

router.route("/").get(auth, getGames).post(auth, setGames);

router
  .route("/:name")
  .get(auth, getGamesByCoincidance)
  .post(auth, setGamesByCoincidance);

  export default router;
