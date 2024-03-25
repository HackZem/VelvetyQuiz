import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { IReq, IRes } from "@src/routes/types/express/misc";
import {
  activateLinkService,
  registrationService,
  loginService,
  logoutService,
  refreshService,
} from "@src/services/UserService";
import { NextFunction } from "express";

export const getMe = async (req: IReq, res: IRes, next: NextFunction) => {
  res.send("hallo");
  res.status(200);
};

export const updateOne = async (req: IReq, res: IRes, next: any) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const deleteOne = async (req: IReq, res: IRes, next: any) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: IReq<{ email: string; password: string }>,
  res: IRes,
  next: any
) => {
  try {
    const { email, password } = req.body;

    const data = await loginService(email, password);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const register = async (
  req: IReq<{ username: string; email: string; password: string }>,
  res: IRes,
  next: any
) => {
  try {
    const { username, email, password } = req.body;

    const data = await registrationService(username, email, password);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req: IReq, res: IRes, next: any) => {
  try {
    const { refreshToken } = req.cookies;

    const token = await logoutService(refreshToken);

    res.clearCookie("refreshToken");

    return res.json(token);
  } catch (err) {
    next(err);
  }
};

export const refresh = async (req: IReq, res: IRes, next: any) => {
  try {
    const { refreshToken } = req.cookies;

    const data = await refreshService(refreshToken);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const activate = async (req: IReq, res: IRes, next: any) => {
  try {
    const link = req.params.link;

    await activateLinkService(link);

    return res.redirect(process.env.CLIENT_URL as string);
  } catch (err) {
    next(err);
  }
};
