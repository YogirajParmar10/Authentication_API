import express, { Request, Response, NextFunction } from "express";
import authRoutes from "./routes/auth";
import * as bodyParser from "body-parser";
import sequelize from "./util/database";

const app: express.Application = express();

app.use(bodyParser.json());
app.use(authRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  const status: number = error.statusCode || 500;
  const message: string = error.message;
  const data: any = error.data;
  res.status(status).json({ message: message, data: data });
});

sequelize
  .sync()
  .then(() => {
    app.listen(5040);
  })
  .catch((err) => {
    console.log(err);
  });
