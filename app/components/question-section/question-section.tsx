"use client";

import { useQuiz } from "@/context/QuizContext";
import QuestionCard from "../cards/question-card";
import AnswerButtons from "../buttons/answer-buttons";
import Pagination from "../pagination/pagination";

export default function QuestionSection() {
  const { questions, currentPage } = useQuiz();

  const question = questions[currentPage];
  if (!questions.length || !question) {
    return (
      <div className="flex-center-column mt-10">
        <p>Loading quiz...</p>
      </div>
    );
  }

  return (
    <>
      <p>
        <strong>
          {currentPage + 1} / {questions.length}
        </strong>
      </p>
      <QuestionCard />
      <AnswerButtons />
      <div className="flex-center-column">
        <Pagination />
      </div>
    </>
  );
}
