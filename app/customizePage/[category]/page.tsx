"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import Icons from "../../components/icons/icons";
import { reformatCategoryName } from "@/utils/reformatStrings";
import DifficultySelect from "@/app/components/dificulty-select/difficulty-select";

export default function CustomizePage() {
  const params = useParams();
  const categoryParam = decodeURIComponent(params.category as string);
  const { selectedCategory, setSelectedCategory } = useQuiz();

  const formattedCategory = reformatCategoryName(categoryParam);
  const formattedSelectedCategory = reformatCategoryName(selectedCategory ?? "");

  useEffect(() => {
    if (formattedCategory && selectedCategory !== formattedSelectedCategory) {
      setSelectedCategory(formattedSelectedCategory);
    }
  }, [formattedCategory, selectedCategory, setSelectedCategory]);

  return (
    <div>
      <h2 className="mb-7">Customize Trivia</h2>
      {selectedCategory && (
        <div className="category-title">
          <Icons categories={selectedCategory ?? ""} />
          <h3>{selectedCategory}</h3>
        </div>
      )}
      <div className="flex-center">
        <DifficultySelect />
      </div>
    </div>
  );
}
