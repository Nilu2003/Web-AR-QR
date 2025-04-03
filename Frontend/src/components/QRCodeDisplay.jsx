import React, { useState } from "react";
import axios from "axios";

const QRCodeDisplay = () => {
    const [modelUrl, setModelUrl] = useState("");
    const [qrCode, setQrCode] = useState("");

    const generateQR = async () => {
        const res = await axios.post("http://localhost:8000/api/v1/qr/generate", { modelUrl });
        setQrCode(res.data.qrCode);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter 3D Model URL"
                value={modelUrl}
                onChange={(e) => setModelUrl(e.target.value)}
            />
            <button onClick={generateQR}>Generate QR Code</button>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    );
};

export default QRCodeDisplay;
