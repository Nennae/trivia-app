"use client";

import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";

export default function AnswerButtons() {
  const { questions, currentPage, userAnswers, setUserAnswer } = useQuiz();

  const question = questions[currentPage];
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const selectedAnswer = userAnswers[currentPage] ?? null;

  useEffect(() => {
    if (!question) return;

    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    const shuffled = [...allAnswers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [question]);

  if (!question) return null;

  const handleAnswer = (answer: string) => {
    setUserAnswer(currentPage, answer);
  };

  return (
    <div className="flex-center-column">
      {shuffledAnswers.map((answer, index) => (
        <button
          aria-label={`answer option: ${answer}`}
          suppressHydrationWarning={true}
          key={`${question.question}-${index}`}
          onClick={() => handleAnswer(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
          className={`answer-btn ${
            selectedAnswer === answer ? "bg-lilac text-dark duration-300" : ""
          }`}
        />
      ))}
    </div>
  );
}
