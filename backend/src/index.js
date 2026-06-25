import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "1.0.0.1"]); 
import express from 'express';
import "dotenv/config";
import User from './models/user.model.js';
import Message from './models/message.model.js';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port ' + PORT)
});