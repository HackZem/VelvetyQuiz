import getTestDto, { ITestDto } from "@src/dtos/testDto";
import { ApiError } from "@src/exceptions/ApiError";
import TestModel, { ITest } from "@src/models/TestModel";
import { IUser } from "@src/models/UserModel";
import { IReqQuery, IReq, IRes } from "@src/routes/types/types";

export const getAll = async (
  req: IReqQuery<{ page: string; limit: string; text: string }>,
  res: IRes,
  next: any
) => {
  try {
    let page = +req.query.page || 1;
    const limit = +req.query.limit || 10;

    const search = req.query.text;
    const filter = search ? { name: { $regex: search, $options: "i" } } : {};

    const totalQuiz = await TestModel.countDocuments(filter);

    if (!totalQuiz) {
      throw ApiError.NotFound("Not found");
    }

    const maxPages = Math.ceil(totalQuiz / limit);

    if (page > maxPages) {
      page = maxPages;
    }

    const skip = (page - 1) * limit;

    const tests = await TestModel.find(filter)
      .skip(skip)
      .limit(limit)
      .populate<{ author: IUser }>("author")
      .lean();

    const dtoTests = tests.map((item) => getTestDto(item));

    res.json({
      maxPages,
      page,
      testCount: tests.length,
      tests: dtoTests,
    });
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req: IReq, res: IRes) => {
  try {
    const id = req.params.id;

    const test = await TestModel.findById(id)
      .populate<{
        author: IUser;
      }>("author")
      .lean();

    if (!test) {
      return res.status(404).json({
        message: "Test not found",
      });
    }

    const testDto: ITestDto = getTestDto(test);

    res.json(testDto);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get test",
    });
  }
};

export const addOne = async (req: IReq<ITest>, res: IRes) => {
  try {
    const test = req.body;

    const doc = new TestModel(test);

    await doc.save();

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create test",
    });
  }
};

export const removeOne = async (req: IReq, res: IRes) => {
  try {
    const id = req.params.id;

    const removedTest = await TestModel.findByIdAndDelete(id);

    if (!removedTest) {
      res.status(404).json({
        message: "Test not found",
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to remove test",
    });
  }
};

export const editOne = async (req: IReq<ITest>, res: IRes) => {
  try {
    const test = req.body;

    const id = req.params.id;

    const updatedTest = await TestModel.updateOne({ _id: id }, test);

    if (!updatedTest) {
      res.status(404).json({
        message: "Test not found",
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to update test",
    });
  }
};
