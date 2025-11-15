import { Sidebar } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full bg-red-200 mx-auto">
        <Sidebar />
        <div className="px-5">
          {children}
        </div>
      </div>
    </main>
  );
}
