import { Question } from "@/interfaces/question-interface";

export default function QuestionCard({ questions }: { questions: Question }) {
  // Removes characters from : to the beggining of the string
  // and replaces them with an empty string
  const reformattedCategory = questions.category.replace(/.*?:\s*/, "");

  return (
    <div className="question-card">
      <h3 dangerouslySetInnerHTML={{ __html: reformattedCategory }} />
      <p dangerouslySetInnerHTML={{ __html: questions.question }} />
    </div>
  );
}
