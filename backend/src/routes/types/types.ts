import { IUserAuthDto } from "@src/dtos/userAuthDto";
import * as e from "express";
import { Query } from "express-serve-static-core";

// **** Express **** //

export interface IReq<T = void> extends e.Request {
  body: T;
  user?: IUserAuthDto;
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
  user?: IUserAuthDto;
}

export interface IRes extends e.Response {}
