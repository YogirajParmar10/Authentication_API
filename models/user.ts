// import mongoose, { Schema, Document } from "mongoose";

// export interface UserDocument extends Document {
//   email: string;
//   name: string;
//   password: string;
// }

// const userSchema: Schema = new Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// export const User = mongoose.model<UserDocument>("User", userSchema);

import { DataTypes, Model } from "sequelize";
import sequelize from "../util/database";

class User extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
