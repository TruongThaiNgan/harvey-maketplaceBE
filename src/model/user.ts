import { LeanDocument, model, Schema, Document } from 'mongoose';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utlis';

interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  shopName: string;
  shopUrl: string;
  phoneNumber: string;
  password: string;
}
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  shopUrl: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export const createUser = async (newUser: IUser) => {
  console.log(newUser);
  const { email, firstName, lastName, shopName, shopUrl, phoneNumber, password } = newUser;
  try {
    let hasExistEmail = null;
    hasExistEmail = await User.findOne({ email });

    if (hasExistEmail) throw new httpError('email exist', 409);
    const hashedPassword = await hashPassword(password);

    const user = new User({ ...newUser, password: hashedPassword });
    await user.save();

    const accessToken = createAccessToken(user.id);
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export const findPasswordByUserName = async (userName: string) => {
  let user: LeanDocument<IUser> | null = null;
  try {
    user = await User.findOne({ email: userName }).select('password').lean();
    if (user) {
      return user.password;
    }
  } catch (error) {
    throw error;
  }
};

export const findIDByUserName = async (userName: string) => {
  let user: LeanDocument<IUser> | null = null;
  try {
    user = await User.findOne({ email: userName }).select('_id').lean();
    if (user) {
      return user._id;
    }
  } catch (error) {
    throw error;
  }
};
