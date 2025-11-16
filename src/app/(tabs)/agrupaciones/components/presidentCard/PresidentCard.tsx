import Link from "next/link";
import { AcceptanceRate } from "../acceptanceRate";
import { PresidentCardProps } from "./PresidentCard.types";

export default function PresidentCard({ id, name, politicalParty, politicalPartyShort, image, voteCount, totalVotes, slug }: PresidentCardProps) {
  const href = slug ? `/agrupaciones/${slug}` : `/agrupaciones/${id}`;

  return (
    <Link href={href} className="no-underline">
      <div className=" bg-slate-900 h-150 w-full flex-col border">
        <div className="flex flex-col -space-y-9 font-bold uppercase text-center">
          <img className="w-full h-85 bg-black mask-b-from-85% mask-b-to-100% object-cover" src={image} alt={name} />
          <h2 className="text-xl text-white z-2">{name}</h2>
        </div>
        <div className="flex flex-col gap-5 text-center uppercase">
          <p className="text-lg font-bold text-white ">{politicalPartyShort}</p>
          <AcceptanceRate voteCount={voteCount} totalVotes={totalVotes} />
        </div>
      </div>
    </Link>
  )
}