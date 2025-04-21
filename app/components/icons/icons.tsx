import { reformatCategoryNameForIcons } from "@/utils/reformatStrings";
import { Question } from "@/interfaces/question-interface";

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
import { ReactElement } from "react";

const categoryIcons: Record<string, ReactElement> = {
  generalknowledge: <IoBriefcaseOutline />,
  books: <PiBooksLight />,
  film: <FaFilm />,
  music: <IoMusicalNotesOutline />,
  musicalstheatres: <FaTheaterMasks />,
  television: <LuTv />,
  videogames: <IoGameControllerOutline />,
  boardgames: <FaChessBoard />,
  sciencenature: <MdOutlineScience />,
  computers: <MdComputer />,
  mathematics: <BiMath />,
  mythology: <LiaDragonSolid />,
  sports: <MdOutlineSportsVolleyball />,
  geography: <FaGlobeAmericas />,
  history: <GrHistory />,
  politics: <GiPublicSpeaker />,
  art: <LuPalette />,
  celebrities: <FaRegStar />,
  animals: <IoPawOutline />,
  vehicles: <FaCarSide />,
  comics: <RiMickeyLine />,
  gadgets: <FaTools />,
  japaneseanimemanga: <LuBadgeJapaneseYen />,
  cartoonanimations: <TbBrandFunimation />,
};

export default function Icons({
  categories,
}: {
  categories: Question["category"];
}) {
  const iconNames = reformatCategoryNameForIcons(categories);
  const icon = categoryIcons[iconNames];

  return <div className="question-card-icons">{icon}</div>;
}
