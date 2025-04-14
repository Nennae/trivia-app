"use client";

import { useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Questions } from "@/interfaces/questions-interface";
import QuestionSection from "../question-section/question-section";

type Props = {
  questions: Questions[];
};

export default function TriviaClientWrapper({ questions }: Props) {
  const { setQuestions, resetQuiz } = useQuiz();

  useEffect(() => {
    resetQuiz();
    setQuestions(questions);
  }, []);

  return null;
}
