import { AxiosResponse } from "axios";
import IAuthResponse from "../models/responses/AuthResponse";
import api from "../axioses/authAxios";

export default class AuthService {
  public static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post<IAuthResponse>(
      "users/auth/login",
      { email, password },
      {
        withCredentials: true,
      }
    );
  }

  public static async registration(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post<IAuthResponse>(
      "users/auth/register",
      {
        username,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
  }

  public static async logout(): Promise<void> {
    return api.post("users/auth/logout", {
      withCredentials: true,
    });
  }
}
