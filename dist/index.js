"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const etherealEmail_1 = require("./etherealEmail");
const sendEmail_1 = __importDefault(require("./sendEmail"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});
app.get('/etherealemail', etherealEmail_1.etherealEmail);
app.use(express_1.default.json());
app.post('/gmail', (req, res) => {
    (0, sendEmail_1.default)(req.body);
    res.end('success');
});
app.listen('5000', () => {
    console.log('server running at 5000');
});
