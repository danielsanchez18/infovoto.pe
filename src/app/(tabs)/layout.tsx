import { Navbar } from "@/components/navbar/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full max-w-[90rem] mx-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
