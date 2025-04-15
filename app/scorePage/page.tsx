import ScoreCard from "../components/cards/score-card"
import ResultButton from "../components/button/result-button"

export default function ScorePage() {
  return (
    <div className="flex-center-column">
      <h2>Final Score</h2>
      <ScoreCard />
      <ResultButton />
    </div>
  )
}
