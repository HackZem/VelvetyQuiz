import nodemailer, { TransportOptions } from "nodemailer";

let transporter = null;

export const sendActivationMail = async (email: string, link: string) => {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASSWORD as string,
    },
  } as TransportOptions);

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    topic: "Account activation on VelvetyQuiz",
    text: "",
    html: `
      <div>
        <h2>To activate, please click on the button</h2>
        <a href="${link}">${link}</a>
      </div>
    `,
  });

  return null;
};
