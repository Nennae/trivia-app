import Image from "next/image";
import Card from "./components/cards/start-card";

export default function Home() {
  return (
    <div>
      <main className="flex-center-column">
        <h2>Play Trivia</h2>
        <Card></Card>
      </main>
    </div>
  );
}
