import { IUser } from "@src/models/UserModel";
import { HydratedDocument, ObjectId } from "mongoose";

export interface IUserAuthDto {
  email: string;
  id: ObjectId;
  isActivated: boolean;
}

const getDto = (model: HydratedDocument<IUser>) => {
  return {
    email: model.email,
    id: model._id,
    isActivated: model.isActivated,
  };
};

export default getDto;
