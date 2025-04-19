import { Question } from "@/interfaces/question-interface";
import he from "he";

export function reformatCategoryNameForIcons(
  category: Question["category"]
): string {
  const reformattedCategory = he
    .decode(category) // Remove special characters
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "") // Remove spaces
    .replace(/&/g, "") // Remove ampersands
    .replace(/.*?:\s*/, ""); // Remove all characters from the colon to the first character of string

  return reformattedCategory;
}

export function reformatCategoryName(category: Question["category"]): string {
  const decodedCategoryName = he.decode(category).replace(/.*?:\s*/, ""); // Remove all characters from and including colon to the first character of string
  return decodedCategoryName;
}
