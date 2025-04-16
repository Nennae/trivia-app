"use client";

import { createContext, useContext, useState } from "react";
import { Questions } from "@/interfaces/questions-interface";

type QuizContextType = {
  questions: Questions[];
  setQuestions: (questions: Questions[]) => void;
  userAnswers: string[];
  setUserAnswer: (index: number, answer: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  resetQuiz: () => void;
  getScore: () => number;
  getUserAnswers: () => {
    questionText: string;
    answer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function useQuiz() {
      const context = useContext(QuizContext);
      if (!context) {
            throw new Error("useQuiz must be used within a QuizProvider");
      }
      return context;
}

export function QuizProvider({ children }: { children: React.ReactNode }) {

      const [questions, setQuestions] = useState<Questions[]>([]);
      const [userAnswers, setUserAnswers] = useState<string[]>([]);
      const [currentPage, setCurrentPage] = useState(0);
      const [showDetails, setShowDetails] = useState(false);

      const setUserAnswer = (index: number, answer: string) => {
            setUserAnswers((prev) => {
                  const updated = [...prev];
                  updated[index] = answer;
                  return updated;
            });
      };

      const getScore = () => {
            return userAnswers.reduce((acc, answer, index) => {
                  return answer === questions[index].correct_answer ? acc + 1 : acc;
            }, 0);
      };

      
      const getUserAnswers = () => {
            return userAnswers.map((answer, index) => {
                  const question = questions[index];
                  const correctAnswer = question.correct_answer;
                  return {
                    questionText: question.question,
                    answer,
                    correctAnswer,
                    isCorrect: answer === correctAnswer,
                  };
            });
      };

      const resetQuiz = () => {
            setQuestions([]);
            setUserAnswers([]);
            setCurrentPage(0);
            setShowDetails(false);
      };
      
      return (
      <QuizContext.Provider
            value={{
                  questions,
                  setQuestions,
                  userAnswers,
                  setUserAnswer,
                  currentPage,
                  setCurrentPage,
                  resetQuiz,
                        getScore,
                        getUserAnswers,
                  showDetails,
                  setShowDetails,
            }}
      >
            {children}
      </QuizContext.Provider>
);
}