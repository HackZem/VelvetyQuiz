import ITestResponse from "./TestResponse";

export interface IPaginationTestResponse {
  maxPages: number;
  page: number;
  testCount: number;
  tests: ITestResponse[];
}
