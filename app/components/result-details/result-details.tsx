"use client";

import { useQuiz } from "@/context/QuizContext";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function ResultDetails() {
  const { getUserAnswers } = useQuiz();
  const userAnswers = getUserAnswers();

  const totalPages = userAnswers.length;

  return (
    <div className="mb-10 max-w-700">
      <ul className="flex-col">
        {userAnswers.map((item, index) => (
          <li className="border-b-1 border-light" key={index}>
            <p>
              <strong>
                {index + 1} / {totalPages}
              </strong>
            </p>
            <p>{item.questionText}</p>
            <p className="flex-space-between">
              Correct Answer:
              <span className="results-span">
                {item.correctAnswer}
                <FaCheck className="text-green-500"></FaCheck>
              </span>
            </p>
            <p className="flex-space-between">
              Your Answer:
              <span className="results-span">
                {item.isCorrect ? (
                  <>
                    {item.answer}
                    <FaCheck className="text-green-500 "></FaCheck>
                  </>
                ) : (
                  <>
                    {item.answer}
                    <ImCross className="text-red-500"></ImCross>
                  </>
                )}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
