import { Router } from "express";
const router:Router = Router();
import { login } from "../controllers/session.controller";

router.route("/login").post(login);

export default router;
