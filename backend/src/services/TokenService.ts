import TokenModel from "@src/models/TokenModel";
import jwt from "jsonwebtoken";

export const generateTokens = (payload: any) => {
  const accessToken = jwt.sign(
    payload,
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: process.env.JWT_ACCESS_TIME,
    }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn: process.env.JWT_REFRESH_TIME,
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const saveToken = async (userId: string, refreshToken: string) => {
  const tokenData = await TokenModel.findOne({ user: userId });

  if (tokenData) {
    tokenData.refreshToken = refreshToken;

    return await tokenData.save();
  }

  return await TokenModel.create({ user: userId, refreshToken: refreshToken });
};

export const removeToken = async (refreshToken: string) => {
  const token = await TokenModel.deleteOne({ refreshToken });
  return token;
};

export const validateAccessToken = (token: string) => {
  try {
    const data = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
    return data;
  } catch (_) {
    return null;
  }
};

export const validateRefreshToken = (token: string) => {
  try {
    const data = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
    return data;
  } catch (_) {
    return null;
  }
};

export const findToken = async (token: string) => {
  return await TokenModel.findOne({ refreshToken: token });
};
