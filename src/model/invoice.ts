import { LeanDocument, model, Schema, Document } from 'mongoose';
import { stripe } from '../controllers/payment';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utils';
import { checkEmailVendorExist } from './vendor';

export type InvoiceInfo = {
  customerID: string;
  paymentMethodID: string;
  amount: number;
  description: string;
};

const InvoiceSchema = new Schema<InvoiceInfo>({
  customerID: {
    type: String,
    required: true,
  },
  paymentMethodID: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Invoice = model<InvoiceInfo>('Invoice', InvoiceSchema);

export const createInvoice = async (newInvoice: InvoiceInfo) => {
  try {
    const invoice = new Invoice(newInvoice);
    await invoice.save();
    return invoice;
  } catch (error) {
    throw error;
  }
};
