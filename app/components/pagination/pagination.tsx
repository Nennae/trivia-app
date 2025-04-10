import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  disableNext?: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  disableNext,
}: PaginationProps) {

  return (
    <div className="flex gap-10 mt-3">
      <button
        className="pagination-btns"
        onClick={onPrevious}
        disabled={currentPage === 0}
      >
        <FaChevronLeft />
      </button>
      <Link
        href={currentPage === totalPages - 1 ? "/scorePage" : ""}
        onClick={onNext}
      >
        <button
          className="pagination-btns justify-end"
          disabled={currentPage === totalPages - 1 || disableNext}
        >
          {currentPage === totalPages - 1 ? `Final Score ` : ""}

          <FaChevronRight />
        </button>
      </Link>
    </div>
  );
}
