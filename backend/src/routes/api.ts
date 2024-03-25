import { Router } from "express";

import Paths from "../constants/Paths";
import testRouter from "./TestRouter";
import userRouter from "./UserRouter";

const apiRouter = Router();

apiRouter.use(Paths.Tests.Base, testRouter);
apiRouter.use(Paths.Users.Base, userRouter);

export default apiRouter;
