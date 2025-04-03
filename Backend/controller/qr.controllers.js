import QRCode from"qrcode"
import {Store} from "../models/store.model.js"

export const generateQRCode = async (req, res) => {
    try {
        const { name, modelUrl } = req.body;
        if (!modelUrl) return res.status(400).json({ error: "Model URL is required" });

        const qrCodeData = await QRCode.toDataURL(modelUrl);
        const newModel = await Store.create({ name, modelUrl, qrCodeUrl: qrCodeData });

        res.json({ qrCode: qrCodeData, modelUrl });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
