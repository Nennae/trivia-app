"use client";

import React, { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import { Questions } from "@/interfaces/questions-interface";
import Pagination from "../pagination/pagination";
import QuestionCard from "../cards/question-card";
import AnswerButtons from "../button/answer-buttons";

type QuestionSectionProps = {
  questions: Questions[];
};

export default function QuestionSection({
  questions,
}: QuestionSectionProps): ReactElement {
  const totalPages = questions.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const router = useRouter();

  const isLastPage = currentPage === totalPages - 1;

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setIsAnswerSelected(!!userAnswers[currentPage - 1]);
    }
  };

  const handleNext = () => {
    if (isLastPage && isAnswerSelected) {
      router.push("/scorePage");
    } else if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
      setIsAnswerSelected(!!userAnswers[currentPage + 1]);
    }
  };

  const handleAnswerSelected = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentPage] = answer;
    setUserAnswers(updatedAnswers);
    setIsAnswerSelected(true);
  };

  return (
    <>
      <div>
        <span className="block mb-2 p-5">
          {currentPage + 1} / {totalPages}
        </span>
        <QuestionCard questions={questions[currentPage]} />
      </div>
      <AnswerButtons
        questions={questions[currentPage]}
        onAnswerSelected={handleAnswerSelected}
      />
      <div className="flex-center-column">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isNextDisabled={!isAnswerSelected}
          isPreviousDisabled={currentPage === 0}
        />
      </div>
    </>
  );
}
