import express from "express";
import adminRoutes from "./routes/login";

const app: express.Application = express();

// const port: number = 3000;

app.use(adminRoutes);

app.listen(3000, () => {
  console.log(`TypeScript with Express 
         http://localhost:3000/`);
});
