import { SALT } from "@src/constants/Hash";
import UserModel from "@src/models/UserModel";
import bcrypt from "bcrypt";
import uuid from "uuid";
import { sendActivationMail } from "./MailService";

export const registration = async (email: string, password: string) => {
  const user = await UserModel.findOne({
    email: email,
  });

  if (user !== null) {
    throw new Error("User with this email exists");
  }

  const passwordHash = bcrypt.hash(password, SALT);

  const activationLink = uuid.v4();

  const newUser = await UserModel.create({
    email,
    passwordHash,
    activationLink,
  });

  await sendActivationMail(email, activationLink);
};
