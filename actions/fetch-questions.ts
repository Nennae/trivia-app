"use server";

import { API_ENDPOINT } from "./endpoints";

export const fetchQuestions = async (amount: number) => {
  try {
    const response = await fetch(`${API_ENDPOINT}&amount=${amount}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
