import nodemailer from 'nodemailer';

export const sendMailPaymentSuccess = async (email: string | null) => {
  if (!email) return;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'otis.nguyen.goldenowl@gmail.com',
      pass: 'mxfypbayaexmrjdj',
    },
  });

  try {
    await transporter.sendMail({
      from: '"Harvey-marketplace" <otis.nguyen.goldenowl@gmail.com>',
      to: email,
      subject: 'Thư xác nhận thanh toán thành công tại Harvey Marketplace',
      html: `Thanh toán thành công`,
    });
  } catch (error) {
    throw error;
  }
};
