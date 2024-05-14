import UserModel, { IUser } from "@src/models/UserModel";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { sendActivationMail } from "./MailService";
import {
  findToken,
  generateTokens,
  removeToken,
  saveToken,
  validateRefreshToken,
} from "./TokenService";
import getDto from "@src/dtos/userAuthDto";
import { ApiError } from "@src/exceptions/ApiError";

export const registrationService = async (
  username: string,
  email: string,
  password: string
) => {
  const user = await UserModel.findOne({
    email: email,
  });

  if (user) {
    throw ApiError.BadRequest("User with this email exists");
  }

  const passwordHash = bcrypt.hashSync(password, +(process.env.SALT as string));

  const activationLink = v4();

  const newUser = await UserModel.create({
    username,
    email,
    passwordHash,
    activationLink,
  });

  await sendActivationMail(
    email,
    `${process.env.API_URL as string}/api/users/auth/activate/${activationLink}`
  );

  const userAuthDto = getDto(newUser);

  const tokens = generateTokens({ ...userAuthDto });

  await saveToken(userAuthDto.id.toString(), tokens.refreshToken);

  return { ...tokens, user: userAuthDto };
};

export const loginService = async (email: string, password: string) => {
  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    throw ApiError.BadRequest("User with this email not exists");
  }

  if (!(await bcrypt.compare(password, user.passwordHash))) {
    throw ApiError.BadRequest("Password is incorrent");
  }

  const userAuthDto = getDto(user);

  const tokens = generateTokens({ ...userAuthDto });

  await saveToken(userAuthDto.id.toString(), tokens.refreshToken);

  return { ...tokens, user: userAuthDto };
};

export const logoutService = async (refreshToken: string) => {
  const token = await removeToken(refreshToken);
  return token;
};

export const activateLinkService = async (activateLink: string) => {
  const user = await UserModel.findOne({ activationLink: activateLink });

  if (!user) {
    throw ApiError.BadRequest("Link is uncorrect");
  }

  user.isActivated = true;

  await user.save();
};

export const refreshService = async (refreshToken: string) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }

  const tokenData: any = validateRefreshToken(refreshToken);

  const isExistsInDB = await findToken(refreshToken);

  if (!tokenData || !isExistsInDB) {
    throw ApiError.UnauthorizedError();
  }

  const user = await UserModel.findById(tokenData.id);

  if (!user) {
    throw ApiError.UnauthorizedError();
  }

  const userAuthDto = getDto(user);

  const tokens = generateTokens({ ...userAuthDto });

  await saveToken(userAuthDto.id.toString(), tokens.refreshToken);

  return { ...tokens, user: userAuthDto };
};

export const deleteOneService = async (id: string) => {
  const deletedUser = await UserModel.findByIdAndDelete(id);

  if (!deletedUser) throw ApiError.NotFound("User not found");
};

export const updateOneService = async (id: string, user: IUser) => {
  const updatedUser = await UserModel.updateOne({ _id: id }, user);

  if (!updatedUser) throw ApiError.NotFound("User not found");
};
