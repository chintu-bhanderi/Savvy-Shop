import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';

import { connectDB } from './config/db.js';

mongoose.set("strictQuery", false);
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//For-API Testing in PostMan:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use("/api/user",userRoutes);

app.listen(5000, () => {
    console.log("Server started at port 5000");
});
