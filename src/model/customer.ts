import { LeanDocument, model, Schema, Document } from 'mongoose';
import { stripe } from '../controllers/payment';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utils';
import { InvoiceInfo } from './invoice';
import { checkEmailVendorExist } from './vendor';

export type CustomerInfo = {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  postCode: string;
  city: string;
  phone: string;
  email: string;
};

export interface CustomerLocalDocument extends Document {
  email: string;
  password: string;
  customerID: string;
  listPaymentID: string[];
  type: 'local';
  info: CustomerInfo;
  invoices: InvoiceInfo[];
}

export type PaymentMethod = {
  fingerprint: string;
  paymentID: string;
};

interface CustomerLocal extends Document {
  email: string;
  password: string;
  customerID: string;
  listPaymentID: PaymentMethod[];
  info: CustomerInfo;
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
const CustomerSchema = new Schema<CustomerLocal>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  customerID: {
    type: String,
    required: true,
  },
  listPaymentID: {
    type: [Object],
  },
  info: {
    type: Object,
    default: undefined,
  },
  type: {
    type: String,
    required: true,
  },
  invoices: [{ type: Schema.Types.ObjectId, default: [], ref: 'Invoice' }],
});

const Customer = model<CustomerLocal>('Customer', CustomerSchema);

export const checkExistEmail = async (email: string) => {
  try {
    const hasExistEmailCustomer = await Customer.findOne({ email });
    return !!hasExistEmailCustomer;
  } catch (error) {
    throw error;
  }
};

export const createLocalCustomer = async (newCustomer: CustomerLocal) => {
  const { email, password } = newCustomer;
  try {
    let hasExistEmail = await checkExistEmail(email);
    if (hasExistEmail) throw new httpError('email exist', 409);

    const hashedPassword = await hashPassword(password);

    const stripeCustomer = await stripe.customers.create({ email });
    const customer = new Customer({
      ...newCustomer,
      type: 'local',
      password: hashedPassword,
      customerID: stripeCustomer.id,
    });
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

export const findListPayment = async (id: string) => {
  try {
    let customer = await Customer.findById(id).lean();
    if (!customer) return [];
    const listPaymentID = customer.listPaymentID.map(({ paymentID }) => {
      return paymentID;
    });
    const list = await Promise.all(
      listPaymentID.map(async (id) => {
        const numberCard = await stripe.paymentMethods.retrieve(id);
        return {
          paymentMethodID: id,
          last4: numberCard.card?.last4,
        };
      }),
    );
    return list;
  } catch (error) {
    throw error;
  }
};

export const addPaymentID = async (id: string, paymentMethod: PaymentMethod) => {
  try {
    if (!id || !paymentMethod) return false;
    let preCustomer = await Customer.findById(id).lean();
    const listPaymentMethod = preCustomer?.listPaymentID as PaymentMethod[];
    const { paymentID, fingerprint } = paymentMethod;
    const hasExist = listPaymentMethod.some(({ fingerprint, paymentID }) => {
      return paymentMethod.fingerprint === fingerprint;
    });
    console.log(hasExist);
    if (hasExist) return false;

    let customer = await Customer.findByIdAndUpdate(
      id,
      {
        $push: {
          listPaymentID: paymentMethod,
        },
      },
      { new: true },
    );
    if (!customer) return false;
    return customer.listPaymentID;
  } catch (error) {
    throw error;
  }
};

export const getCustomerID = async (id: string) => {
  try {
    let customer = await Customer.findById(id).lean();
    if (!customer) return '';
    return customer.customerID;
  } catch (error) {
    throw error;
  }
};

export const findInfo = async (id: string): Promise<CustomerInfo | undefined> => {
  try {
    let customer = await Customer.findById(id).lean();
    if (!customer) return undefined;
    return customer.info;
  } catch (error) {
    throw error;
  }
};
export const updateInfo = async (id: string, info: CustomerInfo) => {
  try {
    let customer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: {
          info: info,
        },
      },
      { new: true },
    );
    if (!customer) return {};
    return customer.info;
  } catch (error) {
    throw error;
  }
};

export const addInvoice = async (id: string, invoice: string) => {
  try {
    let customer = await Customer.findByIdAndUpdate(
      id,
      {
        $push: {
          invoices: invoice,
        },
      },
      { new: true },
    );
    return customer;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (id: string, newPassword: string) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: {
          password: newPassword,
        },
      },
      { new: true },
    );
    return customer;
  } catch (error) {
    throw error;
  }
};
