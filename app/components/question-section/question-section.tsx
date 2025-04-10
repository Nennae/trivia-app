import React, { useEffect, useState } from "react";
import { Questions } from "@/interfaces/questions-interface";

type Props = {
  questionData: Questions;
  onAnswer: (selectedAnswer: string) => void;
  selectedAnswer: string | null;
};

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuestionSection: React.FC<Props> = ({ questionData, onAnswer, selectedAnswer }) => {
      const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    const allAnswers = shuffleArray([
      questionData.correct_answer,
      ...questionData.incorrect_answers,
    ]);
    setShuffledAnswers(allAnswers);
  }, [questionData]);
      
       const reformattedCategory = questionData.category.replace(/.*?:\s*/, "");

      return (
        <>
          <div className="question-card">
            <h3 dangerouslySetInnerHTML={{ __html: reformattedCategory }} />
            <p dangerouslySetInnerHTML={{ __html: questionData.question }} />
          </div>
          <div className="flex-center-column">
            {shuffledAnswers.map((answer) => (
              <button
                key={`${questionData.question}-${answer}`}
                onClick={() => onAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
                className={`answer-btn ${
                  selectedAnswer === answer ? "selected" : ""
                }`}
              />
            ))}
          </div>
        </>
      );
};

export default QuestionSection;
