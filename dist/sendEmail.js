"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const Email = (options) => {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'ssaammiiiissllaamm@gmail.com',
            pass: 'vhdibguojdjwebaa',
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    transporter.sendMail(options, (error, info) => {
        if (error) {
            console.log(error);
            return;
        }
    });
};
const EmailSender = ({ name, email, phone }) => {
    const mailOptions = {
        from: 'Sami Islam',
        to: email,
        subject: 'hi',
        text: 'hi',
        html: `<b>Hello world ${name} ${phone}</b>`,
    };
    Email(mailOptions);
};
exports.default = EmailSender;
