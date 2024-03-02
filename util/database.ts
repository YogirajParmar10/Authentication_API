import { Sequelize } from "sequelize";
const sequelize = new Sequelize("Authentication", "root", "1010", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
