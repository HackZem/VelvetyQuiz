import mongoose, { Schema } from "mongoose";

export interface IToken {
  user: Schema.Types.ObjectId;
  refreshToken: string;
}

const TokenSchema = new Schema<IToken>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    refreshToken: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Token", TokenSchema);
