"use client";

import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Questions } from "@/interfaces/questions-interface";

interface AnswerButtonsProps {
  question: Questions;
}

export default function AnswerButtons({ question }: AnswerButtonsProps) {
  console.log(question);
  const { currentPage, userAnswers, setUserAnswer} = useQuiz();
  // const question = questions[currentPage];
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  const selectedAnswer = userAnswers[currentPage] ?? null;

  useEffect(() => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    const shuffled = [...allAnswers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [question]);

  const handleAnswer = (answer: string) => {
    setUserAnswer(currentPage, answer);
  };

  return (
    <div className="flex-center-column">
      {shuffledAnswers.map((answer, index) => (
        <button
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
