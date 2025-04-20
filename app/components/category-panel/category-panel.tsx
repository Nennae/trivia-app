"use client";

import { useState, useEffect } from "react";
import { Category } from "@/interfaces/category-interface"
import { fetchCategories } from "@/actions/fetch-categories";
import { reformatCategoryName } from "@/utils/reformatStrings";
import Icons from "../icons/icons";

export default function CategoryPanel({ }: { name: Category[] }) {
      const [categories, setCategories] = useState<Category[]>([]);
      const formattedCategories = categories.map(category => reformatCategoryName(category.name));
      
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
                  <Icons categories={formattedName} />
                  {formattedName}
                </li>
              ))}
            </ul>
          </div>
        </>
      );
      }