import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "1.0.0.1"]); 
import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import "dotenv/config";
import User from './models/user.model.js';
import Message from './models/message.model.js';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({
    origin: FRONTEND_URL, credentials: true
}));
app.use(clerkMiddleware())

app.get('/health', (req, res) => {
    res.status(200).json({message: "Server is running"});
});

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port ' + PORT)
});