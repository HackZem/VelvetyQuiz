import { AxiosResponse } from "axios";
import ITestResponse from "../models/responses/TestResponse";
import testApi from "../axioses/testAxios";

export default class TestService {
  public static async getTest(
    id: string
  ): Promise<AxiosResponse<ITestResponse>> {
    return testApi.get(`tests/${id}`);
  }
}
