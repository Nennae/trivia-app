"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Pagination() {
  const { currentPage, setCurrentPage, questions, userAnswers } = useQuiz();

  const router = useRouter();

  const totalPages = questions.length;
  const isLastPage = currentPage === totalPages - 1;
  const isAnswerSelected = !!userAnswers[currentPage];

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (isLastPage && isAnswerSelected) {
      router.push("/scorePage");
    } else if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-10 mt-3 mb-20">
      <button
        className="pagination-btns"
        aria-label="Previous question"
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 0}
      >
        <FaChevronLeft />
      </button>

      <button
        className="pagination-btns justify-end"
        aria-label="Next question"
        type="button"
        onClick={handleNext}
        disabled={!isAnswerSelected}
      >
        {isLastPage ? "Final Score" : ""} <FaChevronRight />
      </button>
    </div>
  );
}
