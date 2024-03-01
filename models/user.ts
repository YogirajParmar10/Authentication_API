import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<UserDocument>("User", userSchema);
