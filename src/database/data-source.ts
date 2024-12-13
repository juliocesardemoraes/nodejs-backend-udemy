import { DataSource } from "typeorm";
import { User } from "./schema/User.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_CONNECTION_URI,
  synchronize: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});
