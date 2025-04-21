"use client";

import ScoreCard from "../components/cards/score-card";
import ResultButton from "../components/buttons/result-button";
import ResultDetails from "../components/result-details/result-details";
import { useQuiz } from "@/context/QuizContext";

export default function ScorePage() {
  const { showDetails } = useQuiz();

  return (
    <div className="flex-center-column">
      <h2>Final Score</h2>
      <ScoreCard />
      <ResultButton />
      {showDetails && <ResultDetails />}
    </div>
  );
}
