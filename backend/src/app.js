import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());
dotenv.config();

app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}
))

//routes import

import userRouter from './routes/user.routes.js';
import form1Router from './routes/form.routes.js';

//routes declaration

app.use("/api/v1/users",userRouter);
app.use("/api/v1/forms",form1Router);

export {app};