"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ResultDetails from "../result-details/result-details";

export default function ResultButton() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button
        className="results-btn"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
        {showDetails ? (
          <FaChevronUp className="self-center" />
        ) : (
            <>
              <FaChevronDown className="self-center" />
              {showDetails && <ResultDetails />}
            </>
        )}
      </button>
    </div>
  );
}
