import { LeanDocument, model, Schema, Document } from 'mongoose';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utlis';
import { checkEmailVendorExist } from './vendor';

interface CustomerLocalDocument extends Document {
  email: string;
  password: string;
  type: 'local';
}
interface CustomerLocal {
  email: string;
  password: string;
  type: 'local';
}
interface CustomerFacebookDocument extends Document {
  email: string;
  type: 'facebook';
}
interface CustomerFacebook {
  email: string;
  type: 'facebook';
}
const CustomerSchema = new Schema<CustomerLocal | CustomerFacebook>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
});

const Customer = model<CustomerLocal | CustomerFacebook>('Customer', CustomerSchema);

export const checkExistEmail = async (email: string) => {
  const hasExistEmailCustomer = await Customer.findOne({ email });
  const hasExistEmailVendor = await checkEmailVendorExist(email);
  return !!hasExistEmailCustomer || !!hasExistEmailVendor;
};

export const createLocalCustomer = async (newCustomer: CustomerLocal) => {
  const { email, password } = newCustomer;
  try {
    let hasExistEmail = await checkExistEmail(email);
    if (hasExistEmail) throw new httpError('email exist', 409);

    const hashedPassword = await hashPassword(password);

    const customer = new Customer({ ...newCustomer, type: 'local', password: hashedPassword });
    await customer.save();

    const accessToken = createAccessToken(customer.id);
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export const createFacebookCustomer = async (newCustomer: CustomerFacebook) => {
  const { email } = newCustomer;
  try {
    let hasExistEmail = await checkExistEmail(email);
    if (hasExistEmail) throw new httpError('email exist', 409);

    const customer = new Customer({ ...newCustomer, type: 'facebook' });
    await customer.save();

    const accessToken = createAccessToken(customer.id);
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export const findPasswordByEmail = async (email: string) => {
  try {
    let customer: LeanDocument<CustomerLocalDocument> = await Customer.findOne({ email: email })
      .select('password')
      .lean();
    if (customer) {
      return customer.password;
    }
  } catch (error) {
    throw error;
  }
};

export const findIDByEmail = async (email: string) => {
  try {
    let customer: LeanDocument<CustomerLocalDocument> = await Customer.findOne({ email: email }).select('_id').lean();
    if (customer) {
      return customer._id;
    }
  } catch (error) {
    throw error;
  }
};

export const checkEmailCustomerExist = async (email: string) => {
  try {
    let customer = await Customer.findOne({ email: email });
    if (customer) return true;
    return false;
  } catch (error) {
    throw error;
  }
};

export const findOrCreateCustomer = async (email: string) => {
  try {
    let customer = await Customer.findOne({
      email: email,
    });
    if (!customer) {
      customer = new Customer({ type: 'facebook', email: email });
      await customer.save();
    }
    const accessToken = createAccessToken(customer.id);
    return {
      id: customer.id,
      accessToken: accessToken,
    };
  } catch (error) {
    throw error;
  }
};
