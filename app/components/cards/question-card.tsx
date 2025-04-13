import { Questions } from "@/interfaces/questions-interface";

export default function QuestionCard({ questions }: { questions: Questions }) {

      const reformattedCategory = questions.category.replace(/.*?:\s*/, "");
      
  return (
    <div className="question-card">
      <h3 dangerouslySetInnerHTML={{ __html: reformattedCategory }} />
      <p dangerouslySetInnerHTML={{ __html: questions.question }} />
    </div>
  );
}