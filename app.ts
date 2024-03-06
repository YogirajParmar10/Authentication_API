import express from "express";
import authRoutes from "./routes/auth";
import * as bodyParser from "body-parser";
// import mongoose from "mongoose";
import sequelize from "./util/database";

const app: express.Application = express();

app.use(bodyParser.json());
app.use(authRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(5040);
  })
  .catch((err) => {
    console.log(err);
  });
