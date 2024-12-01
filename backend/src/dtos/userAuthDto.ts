import { IUser } from "@src/models/UserModel";
import mongoose, { HydratedDocument, ObjectId, Types } from "mongoose";

export interface IUserAuthDto {
  email: string;
  id: mongoose.Types.ObjectId;
  isActivated: boolean;
  username: string;
}

const getUserAuthDto = (
  model: IUser & { _id?: Types.ObjectId }
): IUserAuthDto => {
  return {
    email: model.email,
    id: model._id!,
    isActivated: model.isActivated as boolean,
    username: model.username,
  };
};

export default getUserAuthDto;
