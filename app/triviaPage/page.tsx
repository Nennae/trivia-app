import { fetchQuestions } from "@/actions/fetch-questions";
import TriviaClientWrapper from "../components/wrapper/trivia-client-wrapper";

export default async function TriviaPage() {
  const questions = await fetchQuestions(10);

  return (
    <div className="flex-center-column">
      <TriviaClientWrapper questions={questions} />
    </div>
  );
}
