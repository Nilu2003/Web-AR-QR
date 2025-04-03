import React, { useEffect } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";

const QRScanner = ({ onScan }) => {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: { width: 300, height: 300 }, 
            aspectRatio: 1.0,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
            videoConstraints: { facingMode: "environment" }, 
        });

        scanner.render(
            (decodedText) => {
                console.log(" QR Code detected:", decodedText);
                onScan(decodedText);
                scanner.clear();
            },
            (errorMessage) => {
                console.warn(" QR Code scan error:", errorMessage);
            }
        );

        return () => scanner.clear();
    }, [onScan]);

    return <div id="reader"></div>;
};

export default QRScanner;
