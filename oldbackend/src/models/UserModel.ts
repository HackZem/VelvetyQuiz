import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  passwordHash: string;
  isActivated: Boolean;
  activationLink: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    passwordHash: { type: String, require: true },
    isActivated: { type: Boolean, default: false },
    activationLink: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
