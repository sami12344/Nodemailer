import express, { Request, Response } from 'express'
import { etherealEmail } from './etherealEmail'
import EmailSender from './sendEmail'
const app = express()

app.get('/', (req: Request, res: Response): void => {
  res.json({
    message: `Hello World.`,
    toGetEtherealEmial: `1. to get email from ethereal email, go to route /etherealemail and send json data in name, phone, email`,
    toGetgmail: `to get email from gmail, go to route /gmail and send json data in name, phone, email,`,
    dataStructure: {
      name: `John Doe`,
      phone: "551546464",
      email: `johndoe123456@gmail.com`,
    },
    routes: ['/', '/etherealemail','/gmail'],
  })
})
app.get('/etherealemail', etherealEmail)

app.use(express.json())

app.post('/gmail', (req: Request, res: Response) => {
  EmailSender(req.body)

  res.end('success')
})
app.listen('5000', (): void => {
  console.log('server running at 5000')
})
