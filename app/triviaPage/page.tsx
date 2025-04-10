"use client";

import { useEffect, useState } from "react";
import { fetchQuestions } from "@/actions/fetch-questions";
import { Questions } from "@/interfaces/questions-interface";
import QuestionSection from "../components/question-section/question-section";
import Pagination from "../components/pagination/pagination";

import {
  FaGlobeAmericas,
  FaFilm,
  FaTheaterMasks,
  FaCarSide,
  FaRegStar,
  FaTools,
} from "react-icons/fa";
import {
  MdComputer,
  MdOutlineSportsVolleyball,
  MdOutlineScience,
} from "react-icons/md";
import {
  IoBriefcaseOutline,
  IoMusicalNotesOutline,
  IoGameControllerOutline,
  IoPawOutline,
} from "react-icons/io5";
import { GiPublicSpeaker } from "react-icons/gi";
import { GrHistory } from "react-icons/gr";
import { RiMickeyLine } from "react-icons/ri";
import { LuTv, LuBadgeJapaneseYen, LuPalette } from "react-icons/lu";
import { LiaDragonSolid } from "react-icons/lia";
import { FaChessBoard } from "react-icons/fa6";
import { PiBooksLight } from "react-icons/pi";
import { BiMath } from "react-icons/bi";
import { TbBrandFunimation } from "react-icons/tb";

export default function TriviaPage() {

  const [showWarning, setShowWarning] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions(10);
      setQuestions(data);
    };
    getQuestions();
  }, []);
  
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentPage]);

  const handleNext = () => {
    if(!selectedAnswer) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    setCurrentPage((prev) => Math.min(prev + 1, questions.length - 1));
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex-center-column">
      {questions.length > 0 && (
        <QuestionSection
          key={questions[currentPage].question}
          questionData={questions[currentPage]}
          selectedAnswer={selectedAnswer}
          onAnswer={(answer) => {
            setSelectedAnswer(answer);
            setIsCorrect(answer === questions[currentPage].correct_answer);
            setShowWarning(false);
          }}
        />
      )}

      {showWarning && (
        <p className="text-red-500 font-medium">
          Please select answer to proceed
        </p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disableNext={false}
      />
    </div>
  );
}
