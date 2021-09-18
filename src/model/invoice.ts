import { LeanDocument, model, Schema, Document } from 'mongoose';
import { stripe } from '../controllers/payment';
import httpError from '../utils/httpError';
import { createAccessToken, hashPassword } from '../utils/utils';
import { addInvoice, CustomerLocalDocument } from './customer';
import { checkEmailVendorExist } from './vendor';

export interface InvoiceInfo {
  customerID: string;
  paymentMethodID: string;
  amount: number;
  description: string;
  owner?: CustomerLocalDocument;
}

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
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Customer',
  },
});

const Invoice = model<InvoiceInfo>('Invoice', InvoiceSchema);

export const createInvoice = async (id: string, newInvoice: InvoiceInfo) => {
  try {
    const invoice = new Invoice({ ...newInvoice, owner: id });
    await invoice.save();
    await addInvoice(id, invoice.id);
    return invoice;
  } catch (error) {
    throw error;
  }
};

export const findAllInvoice = async () => {
  try {
    const invoice = await Invoice.find({}).populate('owner');
    console.log(invoice);
    return invoice;
  } catch (error) {
    console.log(error);
  }
};

export const findInvoice = async (id: string) => {
  try {
    const invoice = await Invoice.findById(id).lean();
    return invoice;
  } catch (error) {
    console.log(error);
  }
};
