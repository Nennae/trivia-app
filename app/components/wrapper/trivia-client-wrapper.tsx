"use client";

import { useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Question } from "@/interfaces/question-interface";
import QuestionSection from "../question-section/question-section";

type Props = {
  questions: Question[];
};

export default function TriviaClientWrapper({ questions }: Props) {
  const { setQuestions, resetQuiz } = useQuiz();

  useEffect(() => {
    resetQuiz();
    setQuestions(questions);
  }, []);

  return <QuestionSection />;
}
