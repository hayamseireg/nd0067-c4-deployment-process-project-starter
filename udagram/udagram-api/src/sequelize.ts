import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.database_port  as unknown as number || 5432,
  dialect: "postgres",
 // storage: ":memory:",
});
