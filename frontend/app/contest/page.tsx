"use client";

import { useRef } from "react";
import Webcam from "react-webcam";

export default function ContestPage() {
  const webcamRef = useRef<Webcam>(null);

  return (
    <div className="fixed inset-0">
      {/* 🌄 Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/body.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 📷 Camera */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-black/70 p-4 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-white mb-2 text-lg font-semibold">
            Live Camera
          </h2>

          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-[320px] h-[240px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}