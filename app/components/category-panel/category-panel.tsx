"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { Category } from "@/interfaces/category-interface";
import { fetchCategories } from "@/actions/fetch-categories";
import { reformatCategoryName } from "@/utils/reformatStrings";
import Icons from "../icons/icons";
import { FaChevronRight } from "react-icons/fa";

export default function CategoryPanel({}: { name: Category[] }) {
  const { setSelectedCategory } = useQuiz();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

   const formattedCategories = categories.map((category) =>
     reformatCategoryName(category.name)
   );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectCategory = (index: number) => {
    setSelectedIndex(index);
    setSelectedCategory(formattedCategories[index]);
  };

  const handleContinueClick = () => {
    if (selectedIndex !== null) {
      router.push(`/customizePage/${formattedCategories[selectedIndex]}`);
    } 
  };

  return (
    <>
      <h2>Select Subject</h2>
      <div className="category-panel">
        <ul className="category-list">
          {categories.map((category, index) => {
            const formattedName = reformatCategoryName(category.name);
            const isSelected = index === selectedIndex;

            return (
              <li
                onClick={() => handleSelectCategory(index)}
                className={`category-items ${isSelected ? "selected" : ""}`}
                key={category.id}
              >
                <span
                  className={`category-icons ${
                    selectedIndex === index ? "bg-lilac text-dark" : ""
                  }`}
                >
                  <Icons categories={formattedName} />
                </span>
                {formattedName}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={handleContinueClick}
        disabled={selectedIndex === null}
        className="gap-2 mb-10 continue-btn md:min-w-50 md:flex-space-between"
        type="button"
      >
        Continue
        <FaChevronRight className="continue-icon" />
      </button>
    </>
  );
}
