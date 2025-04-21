"use client";

export default function DifficultySelect() {
  return (
    <div className="mt-10">
      <p className="text-xl mb-5 p-0">Difficulty</p>
      <div className="select-btns-container flex gap-10">
        <button className="difficulty-btns">Easy</button>
        <button className="difficulty-btns">Medium</button>
        <button className="difficulty-btns">Hard</button>
      </div>
    </div>
  );
}
