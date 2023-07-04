import express, { Request, Response } from 'express'
import { etherealEmail } from './etherealEmail'
import EmailSender from './sendEmail'
const app = express()

app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Hello world' })
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
