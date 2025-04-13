import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  isNextDisabled,
  isPreviousDisabled,
}: PaginationProps) {
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div className="flex gap-10 mt-3">
      <button
        className="pagination-btns"
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        aria-label="Föregående fråga"
      >
        <FaChevronLeft />
      </button>

      <button
        className="pagination-btns justify-end"
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Nästa fråga"
      >
        {isLastPage ? "Final Score" : ""} <FaChevronRight />
      </button>
    </div>
  );
}
