import { Navbar } from "@/components/navbar/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full max-w-[80rem] mx-auto px-5">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
