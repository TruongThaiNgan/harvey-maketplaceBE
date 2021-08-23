import { LeanDocument, model, Schema, Document } from 'mongoose';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utlis';
import { checkEmailCustomerExist } from './customer';

interface VendorDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  shopName: string;
  shopUrl: string;
  phoneNumber: string;
  password: string;
}
const vendorSchema = new Schema<VendorDocument>({
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

const Vendor = model<VendorDocument>('Vendor', vendorSchema);

export const createVendor = async (newVendor: VendorDocument) => {
  const { email, firstName, lastName, shopName, shopUrl, phoneNumber, password } = newVendor;
  try {
    let hasExistEmail = null;
    hasExistEmail = await Vendor.findOne({ email });
    hasExistEmail ||= await checkEmailCustomerExist(email);

    if (hasExistEmail) throw new httpError('email exist', 409);
    const hashedPassword = await hashPassword(password);

    const vendor = new Vendor({ ...newVendor, password: hashedPassword });
    await vendor.save();

    const accessToken = createAccessToken(vendor.id);
    return accessToken;
  } catch (error) {
    throw error;
  }
};

export const findPasswordByEmail = async (email: string) => {
  let vendor: LeanDocument<VendorDocument> | null = null;
  try {
    vendor = await Vendor.findOne({ email: email }).select('password').lean();
    if (vendor) {
      return vendor.password;
    }
  } catch (error) {
    throw error;
  }
};

export const findIDByEmail = async (email: string) => {
  let vendor: LeanDocument<VendorDocument> | null = null;
  try {
    vendor = await Vendor.findOne({ email: email }).select('_id').lean();
    if (vendor) {
      return vendor._id;
    }
  } catch (error) {
    throw error;
  }
};

export const checkEmailVendorExist = async (email: string) => {
  try {
    let vendor = await Vendor.findOne({ email: email });
    if (vendor) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
