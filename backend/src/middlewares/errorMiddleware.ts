import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { ApiError } from "@src/exceptions/ApiError";
import { IReq, IRes } from "@src/routes/types/types";
import { NextFunction } from "express";

type TErrorMiddleware = (
  err: ApiError | Error,
  req: IReq,
  res: IRes,
  next: NextFunction
) => IRes;

const errorMiddleware: TErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  return res
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: "Server error" });
};

export default errorMiddleware;
