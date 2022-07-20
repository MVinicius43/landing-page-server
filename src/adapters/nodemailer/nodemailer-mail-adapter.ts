import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "mviniciusess@gmail.com",
    pass: "tjrsrxsrsvzqgxgb"
  },
  tls: {
      rejectUnauthorized: false
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'mviniciusess@gmail.com',
      to: 'mviniciusess@gmail.com',
      subject,
      html: body
    })
  }
}