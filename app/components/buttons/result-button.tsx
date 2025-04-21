"use client";
import { useQuiz } from "@/context/QuizContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ResultButton() {
  const { showDetails, setShowDetails } = useQuiz();

  return (
    <div>
      <button
        className="results-btn"
        aria-label="show game details"
        type="button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Game Details" : "Show Game Details"}
        {showDetails ? (
          <FaChevronUp className="self-center" />
        ) : (
          <FaChevronDown className="self-center" />
        )}
      </button>
    </div>
  );
}
