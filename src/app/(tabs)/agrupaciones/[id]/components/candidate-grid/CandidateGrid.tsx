import CandidateCard from "../candidate-card/CandidateCard";

export default function CandidateGrid() {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-between">
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
      <CandidateCard />
    </div>
  )
}