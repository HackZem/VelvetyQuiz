import { IReq, IRes } from "@src/routes/types/express/misc";
import { NextFunction } from "express";

export const getOne = async (req: IReq, res: IRes, next: NextFunction) => {
  res.send("test");
  res.status(200);
};

export const updateOne = async (req: IReq, res: IRes, next: any) => {};

export const deleteOne = async (req: IReq, res: IRes, next: any) => {};

export const login = async (req: IReq, res: IRes, next: any) => {};

export const register = async (req: IReq, res: IRes, next: any) => {};

export const logout = async (req: IReq, res: IRes, next: any) => {};

export const refresh = async (req: IReq, res: IRes, next: any) => {};

export const activate = async (req: IReq, res: IRes, next: any) => {};
