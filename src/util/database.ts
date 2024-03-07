import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  `${process.env.DATABASE}`,
  `${process.env.ROOT}`,
  `${process.env.PASSWORD}`,
  {
    dialect: "mysql",
    host: `${process.env.HOST}`,
  }
);

export default sequelize;
