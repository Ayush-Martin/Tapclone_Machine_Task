import { Schema, Document, model } from "mongoose";

export interface IUserDocument extends Document {
  email: string;
  password: string;
  role: "User" | "Admin";
}

export const UserSchema = new Schema<IUserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: "User",
    enum: ["User", "Admin"],
  },
});

export default model<IUserDocument>("User", UserSchema);
