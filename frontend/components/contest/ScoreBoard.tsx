"use client";

import { useState } from "react";

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  return (
    <div className="mt-6">
      <h2 className="text-xl">Score: {score}</h2>
    </div>
  );
}
