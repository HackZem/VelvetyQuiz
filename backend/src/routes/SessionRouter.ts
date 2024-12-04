import Paths from "@src/constants/Paths";
import {
  addOne,
  editOne,
  findByTest,
  removeOne,
} from "@src/controllers/SessionController";
import authMiddleware from "@src/middlewares/authMiddleware";
import { Router } from "express";

const router = Router();

router.post(Paths.Sessions.Create, addOne);

//router.delete(Paths.Sessions.Remove, removeOne);

router.patch(Paths.Sessions.Edit, editOne);

router.get(Paths.Sessions.FindByTest, authMiddleware, findByTest);

export default router;
