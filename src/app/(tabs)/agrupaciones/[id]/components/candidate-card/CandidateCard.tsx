import Link from "next/link";

export default function CandidateCard() {
  return (
    <Link className="w-56 pt-10" href="/candidato/Pokisaurio">
      <img
        className="w-full h-56 object-cover rounded-md mb-4 bg-white mask-b-from-90% mask-b-to-100%"
        src="/img/lopez-aliaga-removebg-preview.png"

      />
      <h3 className="text-lg font-bold mb-2 text-center uppercase">Rafael López Aliaga</h3>
      <p className="text-center text-primary font-bold">PRESIDENTE</p>
    </Link>  
  )
}