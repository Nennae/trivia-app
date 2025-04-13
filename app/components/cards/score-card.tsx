"use client";

import { useQuiz } from '@/context/QuizContext';
import Button from '../button/button';

export default function ScoreCard() {
  const { getScore, questions } = useQuiz();

  return (
    <div className="card">
      <h4>You scored:</h4>
      <h4 className="font-bold">{getScore()} / {questions.length}</h4>
      <Button />
    </div>
  );
}
