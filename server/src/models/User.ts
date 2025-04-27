import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for User
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define schema for User
const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create the model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
