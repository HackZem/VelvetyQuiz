import Paths from "@src/constants/Paths";
import { addOne, editOne, removeOne } from "@src/controllers/SessionController";
import { Router } from "express";

const router = Router();

router.post(Paths.Sessions.Create, addOne);

router.delete(Paths.Sessions.Remove, removeOne);

router.patch(Paths.Sessions.Edit, editOne);

export default router;
