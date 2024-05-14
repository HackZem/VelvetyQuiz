import Paths from "@src/constants/Paths";
import {
  addOne,
  editOne,
  getAll,
  getOne,
  removeOne,
} from "@src/controllers/TestController";
import { Router } from "express";

const router = Router();

router.get(Paths.Tests.GetAll, getAll);

router.get(Paths.Tests.GetOne, getOne);

router.post(Paths.Tests.Create, addOne);

router.delete(Paths.Tests.Remove, removeOne);

router.patch(Paths.Tests.Edit, editOne);

export default router;
