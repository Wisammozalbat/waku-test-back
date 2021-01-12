import jwt from "jsonwebtoken";
import {Response, Request} from 'express'

export const login = async (req:Request, res:Response) => {
  const { id, name, email, image } = req.body;
  const user = { id: id, name: name, email: email, image: image };

  jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
    console.log(token);
    res.json({
      token,
      user,
      status: 200,
    });
  });
};
