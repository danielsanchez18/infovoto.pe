import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

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
        <Footer />
      </div>
      <div className="w-full px-5 mt-10">
        <Footer />
      </div>
    </main>
  );
}
