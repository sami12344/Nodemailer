import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport'
import { UserData } from './types'

const Email = (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ssaammiiiissllaamm@gmail.com',
      pass: 'vhdibguojdjwebaa',
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error)
      return
    }
  })
}
const EmailSender = ({ name, email, phone }: UserData) => {
  const mailOptions: MailOptions = {
    from: 'Sami Islam',
    to: email,
    subject: 'hi',
    text: 'hi',
    html: `<b>Hello world ${name} ${phone}</b>`,
  }
  Email(mailOptions)
}
export default EmailSender
