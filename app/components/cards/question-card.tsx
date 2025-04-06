"use client";

import { Questions } from "@/interfaces/questions-interface";
import { decode } from "he";

interface Props {
  question: Questions;
}

export default function QuestionCard({ question }: Props): React.JSX.Element {
 
  return (
   <div className="border rounded-xl shadow p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3 text-black">{decode(question.question)}</h2>
    </div>
  );
}

