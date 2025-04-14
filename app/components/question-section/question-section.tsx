"use client";

import { useQuiz } from "@/context/QuizContext";
import QuestionCard from "../cards/question-card";
import AnswerButtons from "../button/answer-buttons";
import Pagination from "../pagination/pagination";
import { Questions } from "@/interfaces/questions-interface";
import { useEffect } from "react";

export default function QuestionSection({ questions }: {questions: Questions[]}) {
  const { setQuestions, resetQuiz, currentPage } = useQuiz();

  console.log(questions)

  useEffect(() => {
    resetQuiz();
    setQuestions(questions);
  }, []);


  if (!questions.length) return <p>Laddar frågor...</p>;

  return (
    <>
      <QuestionCard questions={questions[currentPage]} />
      <AnswerButtons question={questions[currentPage]} />
      <div className="flex-center-column">
        <Pagination />
      </div>
    </>
  );
}
