"use client";

import { useQuiz } from "@/context/QuizContext";
import Button from "../buttons/start-button";

export default function ScoreCard() {
  const { getScore, questions } = useQuiz();

  return (
    <div className="score-card">
      <h4>You scored:</h4>
      <p className="font-bold text-3xl">
        {getScore()} / {questions.length}
      </p>
      <Button />
    </div>
  );
}
