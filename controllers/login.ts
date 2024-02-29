import { Request, Response } from "express";

export const getLogin = (req: Request, res: Response) => {
  res.send("TypeScript With Express");
};
// app.get("/", (_req, _res) => {
//   _res.send("TypeScript With Express");
// });
export default getLogin;
