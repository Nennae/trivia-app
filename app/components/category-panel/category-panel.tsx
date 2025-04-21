"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@/interfaces/category-interface";
import { fetchCategories } from "@/actions/fetch-categories";
import { reformatCategoryName } from "@/utils/reformatStrings";
import Icons from "../icons/icons";
import { FaChevronRight } from "react-icons/fa";

export default function CategoryPanel({}: { name: Category[] }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const formattedCategories = categories.map((category) =>
    reformatCategoryName(category.name)
  );

  const router = useRouter();
  const handleContinueClick = () => {
    router.push("/customizePage");
  };

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

  return (
    <>
      <h2>Select Subject</h2>
      <div className="category-panel">
        <ul className="category-list">
          {formattedCategories.map((formattedName, index) => (
            <li className="category-items" key={categories[index].id}>
              <span className=" category-icons">
                <Icons categories={formattedName} />
              </span>
              {formattedName}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleContinueClick}
        className="gap-2 mb-10 continue-btn md:min-w-50 md:flex-space-between"
        type="button"
      >
        Continue
        <FaChevronRight className="continue-icon" />
      </button>
    </>
  );
}
