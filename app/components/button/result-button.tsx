"use client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

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
          <FaChevronDown className="self-center" />
        )}
      </button>
    </div>
  );
}
