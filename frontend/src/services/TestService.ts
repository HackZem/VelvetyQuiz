import { AxiosResponse } from "axios";
import ITestResponse from "../models/responses/TestResponse";
import testApi from "../axioses/testAxios";
import { IPaginationTestResponse } from "../models/responses/PaginationTestResponse";

export default class TestService {
  public static async getTest(
    id: string
  ): Promise<AxiosResponse<ITestResponse>> {
    return testApi.get(`tests/${id}`);
  }

  public static async getTests(
    page: number,
    limit: number,
    search: string
  ): Promise<AxiosResponse<IPaginationTestResponse>> {
    return testApi.get("tests", {
      params: {
        page,
        limit,
        search,
      },
    });
  }
}
