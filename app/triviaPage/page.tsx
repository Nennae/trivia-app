"use client";

import { useEffect, useState } from "react";
import { fetchQuestions } from "@/actions/fetch-questions";
import { Questions } from "@/interfaces/questions-interface";
import QuestionCard from "../components/cards/question-card";

export default function TriviaPage() {
  const [questions, setQuestions] = useState<Questions[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions(50);
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <div className="flex-center-column">
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );
}
