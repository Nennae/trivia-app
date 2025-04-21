
export default function AmountSelect() {
  return (
    <div>
      <p className="text-xl mb-5 p-0">Number of Questions</p>
      <div className="select-btns-container flex gap-10">
        <button className="difficulty-btns">10</button>
        <button className="difficulty-btns">20</button>
        <button className="difficulty-btns">50</button>
      </div>
    </div>
  );
}
