import { ApiError } from "@src/exceptions/ApiError";
import SessionModel, { ISession } from "@src/models/SessionModel";
import { ITest } from "@src/models/TestModel";
import { IUser } from "@src/models/UserModel";
import { IReq, IReqQuery, IRes } from "@src/routes/types/types";
import { NextFunction } from "express";
import { ObjectId } from "mongoose";

export const addOne = async (req: IReq<ISession>, res: IRes) => {
  try {
    const test = req.body;

    const doc = new SessionModel(test);

    await doc.save();

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create session",
    });
  }
};

export const removeOne = async (req: IReq, res: IRes) => {
  try {
    const id = req.params.id;

    const removedSession = await SessionModel.findByIdAndDelete(id);

    if (!removedSession) {
      res.status(404).json({
        message: "Session not found",
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to remove session",
    });
  }
};

export const editOne = async (req: IReq<ISession>, res: IRes) => {
  try {
    const test = req.body;

    const id = req.params.id;

    const updatedSession = await SessionModel.updateOne({ _id: id }, test);

    if (!updatedSession) {
      res.status(404).json({
        message: "Session not found",
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update session",
    });
  }
};

export const findByTest = async (req: IReq, res: IRes, next: any) => {
  try {
    const testId = req.params.testId;
    const userId = req.user!.id;

    const session = await SessionModel.findOne({ test: testId, user: userId });

    if (!session) {
      throw ApiError.NotFound("Session not found");
    }

    res.json({
      currentQuestionNumber: session?.currentQuestionNumber,
    });
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: IReq, res: IRes, next: any) => {
  try {
    const id = req.params.id;

    const session = await SessionModel.findById(id).populate<{ user: IUser }>(
      "test"
    );

    if (!session) {
      throw ApiError.NotFound("Session not found");
    }
    //TODO add populate for user, test and dto for this
    res.json(session);
  } catch (err) {
    next(err);
  }
};
