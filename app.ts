import express from "express";
import authRoutes from "./routes/auth";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";

const app: express.Application = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose
  .connect(
    "mongodb+srv://yogirajsinhparmar:bmz5nSsx62rXyx6J@cluster0.6jy6ins.mongodb.net/user"
  )
  .then((result) => {
    app.listen(5040);
  })
  .catch((err) => console.log(err));
