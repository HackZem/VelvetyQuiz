import { AxiosResponse } from "axios";
import { ISessionFindInfoResponse } from "../models/responses/SessionFindInfoResponse";
import testApi from "../axioses/testAxios";
import { ISessionResponse } from "../models/responses/SessionResponse";

export default class SessionService {
  public static async findSessionByTest(
    testId: string
  ): Promise<AxiosResponse<ISessionFindInfoResponse>> {
    return testApi.get(`sessions/find/${testId}`);
  }

  public static async getSession(): Promise<AxiosResponse<ISessionResponse>> {
    return testApi.get(`sessions`);
  }
}
