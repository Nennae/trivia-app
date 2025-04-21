
export default function AmountSelect() {
  return (
    <div>
      <p className="text-xl mb-5 p-0">Number of Questions</p>
      <div className="select-btns-container flex gap-10">
        <button className="amount-btns">10</button>
        <button className="amount-btns">20</button>
        <button className="amount-btns">50</button>
      </div>
    </div>
  );
}
