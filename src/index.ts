import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source.js";
import { userRouter } from "./routes.js";

// If you want to connect to mongo uncomment the two lines below
// and add the connection string to the .env file

// import { connectToMongo } from "./database/connect.js";
// connectToMongo();

const app = express();
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/user", userRouter);

app.listen("4000");

export default app;
