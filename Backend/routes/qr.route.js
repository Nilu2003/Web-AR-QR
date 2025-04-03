import { Router } from "express";
import {generateQRCode} from "../controller/qr.controllers.js"


const router=Router();

router.route("/generate").post(generateQRCode)

export default  router
