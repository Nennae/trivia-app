"use client";

import { Questions } from "@/interfaces/questions-interface";
import { decode } from "he";
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

interface Props {
  question: Questions;
}

export default function QuestionCard({ question }: Props): React.JSX.Element {
const reformattedCategory = question.category.replace(/.*?:\s*/, '');
  return (
    <div className="question-card">
      <h3 className="">{decode(reformattedCategory)}</h3>
      <p>{decode(question.question)}</p>
    </div>
  );
}

