"use client";

import { fetchQuestions } from "@/actions/fetch-questions";
import { useQuiz } from "@/context/QuizContext";
import { useEffect } from "react";
import QuestionSection from "../components/question-section/question-section";

export default function TriviaPage() {
  const { setQuestions } = useQuiz();

  useEffect(() => {
    const fetchData = async () => {
      const questions = await fetchQuestions(10);
      setQuestions(questions);
    };
    fetchData();
  }, []);

  return (
    <div className="flex-center-column">
      <QuestionSection />
    </div>
  );
}
