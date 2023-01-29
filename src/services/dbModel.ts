import { Document, model, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel: Model<IUser> = model<IUser>('User', UserSchema);
