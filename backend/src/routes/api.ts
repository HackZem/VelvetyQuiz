import { Router } from "express";

import Paths from "../constants/Paths";
import testRouter from "./TestRouter";
import userRouter from "./UserRouter";
import sessionRouter from "./SessionRouter";

const apiRouter = Router();

apiRouter.use(Paths.Tests.Base, testRouter);
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Sessions.Base, sessionRouter);

export default apiRouter;
