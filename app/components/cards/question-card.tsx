import Icons from "../icons/icons";
import { reformatCategoryName } from "@/utils/reformatStrings";
import { useQuiz } from "@/context/QuizContext";

export default function QuestionCard() {
  const { currentPage, questions } = useQuiz();
  const question = questions[currentPage];
  if (!question) return null;
  // Removes characters from : to the beggining of the string
  // and replaces them with an empty string
  const reformattedCategory = reformatCategoryName(question.category);

  return (
    <article className="question-card">
      <header className="question-card-header">
        <Icons categories={question.category} />
        <h3>{reformattedCategory}</h3>
      </header>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
    </article>
  );
}
