import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import qrROute from "./routes/qr.route.js"


const app =express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"));
app.use(cookieparser());

app.use("/api/v1/qr",qrROute)

export {app};


