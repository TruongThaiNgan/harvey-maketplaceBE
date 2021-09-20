import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'otis.nguyen.goldenowl@gmail.com',
    pass: 'mxfypbayaexmrjdj',
  },
});

export const sendMailPaymentSuccess = async (email: string | null) => {
  if (!email) return;

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
export const sendMailPaymentFail = async (email: string | null) => {
  if (!email) return;

  try {
    await transporter.sendMail({
      from: '"Harvey-marketplace" <otis.nguyen.goldenowl@gmail.com>',
      to: email,
      subject: 'Thư xác nhận thanh toán tại Harvey Marketplace',
      html: `Thanh toán thất bại`,
    });
  } catch (error) {
    throw error;
  }
};

export const sendLinkResetPassword = async (email: string, accessToken: string) => {
  if (!email) return;
  try {
    const link = process.env.URL_CLIENT + `/reset-password?token=${accessToken}`;
    console.log(link);
    await transporter.sendMail({
      from: '"Harvey-marketplace" <otis.nguyen.goldenowl@gmail.com>',
      to: email,
      subject: 'Thư reset email',
      html: `Vui lòng bấm vào link sau để reset password :${link}`,
    });
  } catch (error) {
    console.log(error);
  }
};
