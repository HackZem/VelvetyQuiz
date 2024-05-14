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
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);
