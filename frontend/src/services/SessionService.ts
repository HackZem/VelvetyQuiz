import { AxiosResponse } from "axios";
import { ISessionFindInfoResponse } from "../models/responses/SessionFindInfoResponse";
import testApi from "../axioses/testAxios";

export default class SessionService {
  public static async findSessionByTest(
    testId: string
  ): Promise<AxiosResponse<ISessionFindInfoResponse>> {
    return testApi.get(`sessions/find/${testId}`);
  }
}
