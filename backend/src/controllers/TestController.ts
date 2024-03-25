import TestModel, { ITest } from "@src/models/TestModel";
import { IReq, IRes } from "@src/routes/types/express/misc";

export const getAll = async (_: IReq, res: IRes) => {
  try {
    const tests = await TestModel.find();

    res.json(tests);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get all tests",
    });
  }
};

export const getOne = async (req: IReq, res: IRes) => {
  try {
    const id = req.params.id;

    const test = await TestModel.findById(id);

    if (!test) {
      return res.status(404).json({
        message: "Test not found",
      });
    }

    res.json(test);
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

    const newTest = await doc.save();

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
