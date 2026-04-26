"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";

export default function CameraFeed() {
  const webcamRef = useRef<Webcam>(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4">Live Camera</h2>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-64 h-64 rounded-lg border"
      />
    </div>
  );
}