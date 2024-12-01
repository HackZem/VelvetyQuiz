import * as e from "express";
import { ParsedQs } from "qs";

// **** Express **** //

export interface IReq<T = void> extends e.Request {
  body: T;
}

export interface IRes extends e.Response {}
