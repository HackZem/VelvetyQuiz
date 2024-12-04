import Paths from "@src/constants/Paths";
import {
  addOne,
  editOne,
  getAll,
  getOne,
  removeOne,
} from "@src/controllers/TestController";
import authMiddleware from "@src/middlewares/authMiddleware";
import { Router } from "express";

const router = Router();

router.get(Paths.Tests.GetAll, authMiddleware, getAll);

router.get(Paths.Tests.GetOne, authMiddleware, getOne);

router.post(Paths.Tests.Create, authMiddleware, addOne);

router.delete(Paths.Tests.Remove, authMiddleware, removeOne);

router.patch(Paths.Tests.Edit, authMiddleware, editOne);

export default router;
