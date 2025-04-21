import React from 'react'

export default function QuestionTypeSelect() {
  return (
      <div>
        <p className="text-xl mb-5 p-0">Type of Questions</p>
        <div className="select-btns-container flex gap-10">
          <button className="question-type-btns">Multiple Choice</button>
          <button className="question-type-btns">True / False</button>
        </div>
      </div>
  );
}
