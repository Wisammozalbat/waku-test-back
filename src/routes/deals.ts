import { Router } from "express";
const router:Router = Router();
import { getDeals, setDeals } from "../controllers/deals.controller";
import {auth} from "../middleware/verifyToken";

router.route("/").get(auth, getDeals).post(auth, setDeals);

export default router;
