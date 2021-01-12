import jwt from "jsonwebtoken";
import {Request, Response} from 'express'

export const auth = (req:Request, res:Response, next:any) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, "secretkey", async (err, authData) => {
      if (err) {
        res.json({ status: 403, message: "token is not valid" });
      } else {
        next();
      }
    });
  } else {
    res.json({ status: 403, message: "there is no token" });
  }
};
