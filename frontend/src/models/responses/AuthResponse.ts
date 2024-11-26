import IUserModel from "../UserModel";

export default interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserModel;
}
