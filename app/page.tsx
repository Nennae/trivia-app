import StartCard from "./components/cards/start-card";
import CategoryPanel from "./components/category-panel/category-panel";

export default function Home() {
  return (
    <div>
      <main className="flex-center-column">
        <h2>Play Trivia</h2>
        <StartCard></StartCard>
        <CategoryPanel name={[]} />
      </main>
    </div>
  );
}
