import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Pagination() {
  return (
    <div className="flex gap-10 mt-3 mb-10">
            <button className="pagination-btns"><FaChevronLeft /></button>
            <button className="pagination-btns justify-end"><FaChevronRight /></button>
    </div>
  )
}