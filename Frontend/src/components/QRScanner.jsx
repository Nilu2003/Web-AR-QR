import React from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {
    const navigate = useNavigate();

    const handleScan = (data) => {
        if (data) {
            navigate(`/ar/${encodeURIComponent(data)}`);
        }
    };

    return (
        <QrReader
            delay={300}
            onResult={(result, error) => {
                if (result) handleScan(result.text);
                if (error) console.error(error);
            }}
            style={{ width: "100%" }}
        />
    );
};

export default QRScanner;
