import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../constants/Paths";
import testRouter from "./TestRouter";
import userRouter from "./UserRouter";

const apiRouter = Router();

const validate = jetValidator();

apiRouter.use(Paths.Tests.Base, testRouter);
apiRouter.use(Paths.Users.Base, userRouter);

export default apiRouter;
