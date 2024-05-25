import { Schema, model, models, InferRawDocType, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      validate: (pass: string) => {
        if (!pass?.length || pass.length < 3) {
          new Error('Password must be at least 3 character');
        }
      }
    }
  },
  { timestamps: true }
);

// 3. Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this as Document & IUser;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next();
  }
});

// 3. Create a Model.
const User = models?.User || model<IUser>('User', userSchema);
export default User;

// 4. Export the user type
export type userType = InferRawDocType<typeof userSchema>;
