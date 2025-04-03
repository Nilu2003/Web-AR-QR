import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRCodeDisplay from "./components/QRCodeDisplay";
import QRScanner from "./components/QRScanner";
import ARViewer from "./pages/ARViewer";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<QRCodeDisplay />} />
                <Route path="/scan" element={<QRScanner />} />
                <Route path="/ar/:modelUrl" element={<ARViewer />} />
            </Routes>
        </Router>
    );
};

export default App;
