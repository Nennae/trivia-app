import { Question } from "@/interfaces/question-interface";
import Icons from "../icons/icons";
import { reformatCategoryName } from "@/utils/reformatStrings";

export default function QuestionCard({ questions }: { questions: Question }) {
  // Removes characters from : to the beggining of the string
  // and replaces them with an empty string
  const reformattedCategory = reformatCategoryName(questions.category);

  return (
    <article className="question-card">
      <header className="question-card-header">
        <Icons categories={questions.category} />
        <h3>{reformattedCategory}</h3>
      </header>
      <p dangerouslySetInnerHTML={{ __html: questions.question }} />
    </article>
  );
}
