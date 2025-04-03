import React from "react";
import "aframe";
import { useParams } from "react-router-dom";

const ARViewer = () => {
    const { modelUrl } = useParams();

    return (
        <div>
            <a-scene embedded arjs>
                <a-assets>
                    <a-asset-item id="model" src={decodeURIComponent(modelUrl)}></a-asset-item>
                </a-assets>
                <a-marker preset="hiro">
                    <a-entity gltf-model="#model" scale="1 1 1"></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default ARViewer;
