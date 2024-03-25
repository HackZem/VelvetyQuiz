import Paths from "@src/constants/Paths";
import { Router } from "express";
import {
  activate,
  deleteOne,
  getMe,
  login,
  logout,
  refresh,
  register,
  updateOne,
} from "@src/controllers/UserController";
import authMiddleware from "@src/middlewares/authMiddleware";
import validationMiddleware from "@src/middlewares/validationMiddleware";
import loginValidation from "@src/validations/loginValidation";
import registerValidation from "@src/validations/registerValidation";

const router = Router();

router.get(Paths.Users.GetMe, authMiddleware, getMe);

router.patch(Paths.Users.Update, updateOne);

router.delete(Paths.Users.Delete, deleteOne);

router.post(
  Paths.Users.Auth.Register,
  validationMiddleware(registerValidation),
  register
);

router.post(
  Paths.Users.Auth.Login,
  validationMiddleware(loginValidation),
  login
);

router.post(Paths.Users.Auth.Logout, logout);

router.get(Paths.Users.Auth.Activate, activate);

router.get(Paths.Users.Auth.Refresh, refresh);

export default router;
