"use client";

import { useQuiz } from "@/context/QuizContext";
import QuestionCard from "../cards/question-card";
import AnswerButtons from "../button/answer-buttons";
import Pagination from "../pagination/pagination";

export default function QuestionSection() {
  const { questions, currentPage } = useQuiz();

  if (!questions.length) return <p>Laddar frågor...</p>;

  return (
    <>
      <p>
        <strong>
          {currentPage + 1} / {questions.length}
        </strong>
      </p>
      <QuestionCard questions={questions[currentPage]} />
      <AnswerButtons />
      <div className="flex-center-column">
        <Pagination />
      </div>
    </>
  );
}
