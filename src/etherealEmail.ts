import { Request, Response } from 'express'
import nodemailer, { SendMailOptions } from 'nodemailer'

export const etherealEmail = async (req: Request, res: Response) => {
  const {name,email,phone} = req.body

  const testAccount = await nodemailer.createTestAccount()
  const transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'cassandra.rodriguez28@ethereal.email',
      pass: 'p3MJZwxEJmB2FnJkPz',
    },
  })
  const info: SendMailOptions = await transporter.sendMail({
    from: 'Sami Islam "<cassandra.rodriguez28@ethereal.email>"',
    to: email,
    subject: 'hello',
    text: 'Hello world',
    html: `<b>${name}Hello World</b>`,
  })
  console.log('Message sent: %s', info.messageId)
  res.json(info)
}
