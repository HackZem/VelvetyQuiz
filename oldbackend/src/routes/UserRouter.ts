import Paths from "@src/constants/Paths";
import { Router } from "express";
import {
  activate,
  deleteOne,
  getOne,
  login,
  logout,
  refresh,
  register,
  updateOne,
} from "@src/controllers/UserController";

const router = Router();

router.get(Paths.Users.GetOne, getOne);

router.patch(Paths.Users.Update, updateOne);

router.delete(Paths.Users.Delete, deleteOne);

router.post(Paths.Users.Auth.Register, register);

router.post(Paths.Users.Auth.Login, login);

router.post(Paths.Users.Auth.Logout, logout);

router.get(Paths.Users.Auth.Activate, activate);

router.get(Paths.Users.Auth.Refresh, refresh);

export default router;
