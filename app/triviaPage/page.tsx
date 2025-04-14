import { fetchQuestions } from "@/actions/fetch-questions";
import TriviaClientWrapper from "../components/wrapper/trivia-client-wrapper";
import QuestionSection from "../components/question-section/question-section";
import { Questions } from "@/interfaces/questions-interface";

export default async function TriviaPage() {
  
  const questions: Questions[] = await fetchQuestions(10);
  console.log("trivia page: ", questions);
  return (
    <div className="flex-center-column">
      {questions && <QuestionSection questions={questions} />}
    </div>
  );
}
