import cookieParser from "cookie-parser";

import express from "express";

import BaseRouter from "@src/routes/api";

import Paths from "@src/constants/Paths";

import mongoose from "mongoose";

import dotenv from "dotenv";
import errorMiddleware from "./middlewares/errorMiddleware";
import cors from "cors";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://admin:tikhon1987@cluster0.mbolfca.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connect Succes");
  })
  .catch((err: string) => {
    console.log("ERROR:", err);
  });

const app = express();

app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(Paths.Base, BaseRouter);
app.use(errorMiddleware);

// if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
//   app.use(morgan("dev"));
// }

// if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
//   app.use(helmet());
// }

const start = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server Activated in port: ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
export default app;
