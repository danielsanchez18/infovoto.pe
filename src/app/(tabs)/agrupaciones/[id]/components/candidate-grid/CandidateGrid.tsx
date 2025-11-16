import CandidateCard from "../candidate-card/CandidateCard";

interface Candidate {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  politicalGroupId: number;
  userId: number;
}

interface CandidateGridProps {
  candidates: Candidate[];
}

export default function CandidateGrid({ candidates }: CandidateGridProps) {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-between">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}