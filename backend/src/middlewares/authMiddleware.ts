import { IUserAuthDto } from "@src/dtos/userAuthDto";
import { ApiError } from "@src/exceptions/ApiError";
import { IReq, IRes } from "@src/routes/types/types";
import { validateAccessToken } from "@src/services/TokenService";
import { NextFunction } from "express";

type TAuthMiddleware = (req: IReq | any, res: IRes, next: NextFunction) => void;

const authMiddleware: TAuthMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) return next(ApiError.UnauthorizedError());

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) return next(ApiError.UnauthorizedError());

    const data = validateAccessToken(accessToken);
    if (!data) return next(ApiError.UnauthorizedError());

    req.user = data as IUserAuthDto;

    next();
  } catch (err) {
    next(ApiError.UnauthorizedError());
  }
};

export default authMiddleware;
