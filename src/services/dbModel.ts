import { Document, model, Model, Schema } from 'mongoose';

// User Schema
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

// Music Schema
export interface IMusic extends Document {
  title: string;
  artist: string;
  album: string;
}
const MusicSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});
export const MusicModel: Model<IMusic> = model<IMusic>('Music', MusicSchema);
