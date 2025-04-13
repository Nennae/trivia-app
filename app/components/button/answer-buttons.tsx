"use client";

import { useState, useEffect, ReactElement } from "react";
import { Questions } from "@/interfaces/questions-interface";

type AnswerButtonsProps = {
  questions: Questions;
  onAnswerSelected: (answer: string) => void;
};

export default function AnswerButtons({
  questions,
  onAnswerSelected,
}: AnswerButtonsProps): ReactElement {
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const allAnswers = shuffleArray([
      questions.correct_answer,
      ...questions.incorrect_answers,
    ]);
    setShuffledAnswers(allAnswers);
    setSelectedAnswer(null); // Återställ val när frågan ändras
  }, [questions]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  return (
    <div className="flex-center-column">
      {shuffledAnswers.map((answer, index) => (
        <button
          key={`${questions.question}-${index}`}
          onClick={() => handleAnswer(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
          className={`answer-btn ${
            selectedAnswer === answer ? "bg-lilac text-dark  duration-300" : ""
          }`}
        />
      ))}
    </div>
  );
}
