import Link from "next/link";

interface Candidate {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  politicalGroupId: number;
  userId: number;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const officeTranslations: Record<string, string> = {
  PRESIDENT: "Presidente",
  FIRST_VP: "Primer Vicepresidente",
  SECOND_VP: "Segundo Vicepresidente",
  CONGRESS: "Congresista",
  SENATE_NATIONAL: "Senador Nacional",
  SENATE_REGIONAL: "Senador Regional",
  ANDINE_PARLIAMENT: "Parlamento Andino"
};

export default function CandidateCard({ candidate }: CandidateCardProps) {
  const officeInSpanish = officeTranslations[candidate.office] || candidate.office;

  return (
    <Link className="w-56 pt-10" href={`/candidato/${candidate.id}`}>
      <img
        className="w-full h-56 object-cover rounded-md mb-4 bg-white mask-b-from-90% mask-b-to-100%"
        src={candidate.photoUrl}
        alt={candidate.fullName}
      />
      <h3 className="text-lg font-bold mb-2 text-center uppercase">{candidate.fullName}</h3>
      <p className="text-center text-primary font-bold">{officeInSpanish.toUpperCase()}</p>
    </Link>  
  )
}