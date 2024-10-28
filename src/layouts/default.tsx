import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto px-6 flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        Version 1.0
      </footer>
    </div>
  );
}
