import { ITest } from "@src/models/TestModel";
import getUserAuthDto, { IUserAuthDto } from "./userAuthDto";

export interface ITestDto extends Omit<ITest, "author"> {
  author: IUserAuthDto;
}

const getTestDto = (model: ITest): ITestDto => {
  const testDto: ITestDto = {
    ...model,
    author: getUserAuthDto(model.author),
  };

  return testDto;
};

export default getTestDto;
