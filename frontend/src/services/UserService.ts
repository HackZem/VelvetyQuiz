import { AxiosResponse } from "axios";
import IUserModel from "../models/UserModel";
import api from "../axioses/authAxios";

export default class UserService {
  static fetchMe(): Promise<AxiosResponse<IUserModel>> {
    return api.get<IUserModel>("/users/me");
  }
}
