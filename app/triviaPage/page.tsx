import { fetchQuestions } from "@/actions/fetch-questions";
import QuestionSection from "../components/question-section/question-section";

export default async function TriviaPage() {
  const questions = await fetchQuestions(10);

  return (
    <div className="flex-center-column">
      <QuestionSection questions={questions} />
    </div>
  );
}
