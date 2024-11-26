import { ApiError } from "@src/exceptions/ApiError";
import { IReq, IRes } from "@src/routes/types/types";
import { NextFunction } from "express";
import { ObjectSchema } from "yup";

const validationMiddleware =
  (validator: ObjectSchema<any>) =>
  async (req: IReq | any, res: IRes, next: NextFunction) => {
    const body = req.body;

    try {
      await validator.validate(body);
      return next();
    } catch (err) {
      return next(ApiError.BadRequest("Validation is no valid", err));
    }
  };

export default validationMiddleware;
